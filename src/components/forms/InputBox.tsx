import React, { useCallback, useEffect, useMemo, useState } from "react";

type Size = "md" | "sm";
type InputBoxType = "text" | "number";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  id?: string;
  className?: string;
  size?: Size;
  inputType?: InputBoxType;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  label?: React.ReactNode;
  hint?: string;
  hasError?: boolean;
  paddingRightAndLeft?: number;
  decimalDigits?: number;
}

export const InputBox = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      className,
      label,
      hint,
      placeholder,
      leftComponent,
      rightComponent,
      hasError,
      disabled,
      readOnly,
      size = "md",
      inputType = "text",
      onClick,
      onChange,
      maxLength,
      decimalDigits = 3,
      value,
      paddingRightAndLeft,
      ...restProps
    },
    ref
  ) => {
    const [overvalued, setOvervalued] = useState(false);
    const [valueCount, setValueCount] = useState("");
    const pattern = inputType === "number" ? "[0-9.]" : undefined;

    const formatNumber = useCallback((inputValue: string) => {
      const regex = /\B(?=(\d{3})+(?!\d))/g;
      return inputValue.replace(regex, ",");
    }, []);

    const formatDecimal = useCallback(
      (inputValue: string | number | readonly string[] | undefined) => {
        if (!inputValue) return "";
        const decimalIndex = String(inputValue).indexOf(".");
        if (decimalIndex !== -1) {
          const decimalPart = String(inputValue).slice(
            decimalIndex,
            decimalIndex + decimalDigits + 1
          );
          return String(inputValue).slice(0, decimalIndex) + decimalPart;
        }
        return String(inputValue);
      },
      [decimalDigits]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (inputType === "number") {
        let replaceValue = e.target.value.replace(/[^0-9.]/g, "");
        const decimalIndex = replaceValue.indexOf(".");

        if (decimalIndex === -1) {
          const newChangeEvent = {
            ...e,
            target: {
              ...e.target,
              dataset: { ...e.target.dataset },
              value: replaceValue,
            },
          };
          onChange?.(newChangeEvent);
          return;
        }

        const integerPart = replaceValue.slice(0, decimalIndex);
        const decimalPart = replaceValue.slice(
          decimalIndex,
          decimalIndex + decimalDigits + 1
        );
        replaceValue = integerPart + "." + decimalPart.replace(/\./g, "");

        const newChangeEvent = {
          ...e,
          target: {
            ...e.target,
            dataset: { ...e.target.dataset },
            value: replaceValue,
          },
        };
        onChange?.(newChangeEvent);
        return;
      }
      onChange?.(e);
    };

    const formattedValue = useMemo(() => {
      return inputType === "number"
        ? formatNumber(formatDecimal(value))
        : value;
    }, [inputType, value, formatDecimal, formatNumber]);

    useEffect(() => {
      if (maxLength && typeof value === "string") {
        setOvervalued(maxLength < value.length);
        setValueCount(`${value.length}/${maxLength}`);
      }
    }, [hasError, maxLength, value]);

    return (
      <div className={`${className ?? ""} font-pretendard`}>
        {createLabelElement(label)}

        <div
          onClick={onClick}
          className={`flex items-center box-border rounded border ${
            hasError || overvalued ? "border-red-500" : "border-gray-400"
          } bg-white focus-within:border-blue-500 ${
            disabled ? "bg-gray-100" : ""
          } ${
            paddingRightAndLeft ? `px-[${paddingRightAndLeft}px]` : "px-[14px]"
          }`}
        >
          {createSideElement(leftComponent)}
          <input
            id={id}
            ref={ref}
            placeholder={placeholder}
            autoCapitalize="none"
            {...restProps}
            disabled={disabled}
            pattern={pattern}
            value={formattedValue}
            readOnly={readOnly}
            maxLength={maxLength}
            onChange={handleChange}
            className={`w-full outline-none border-none font-pretendard text-gray-700 ${
              readOnly
                ? "cursor-pointer"
                : disabled
                ? "cursor-not-allowed bg-gray-100"
                : ""
            } placeholder:text-gray-500 ${
              size === "sm"
                ? "h-[34px] text-sm leading-[22px]"
                : "h-[44px] text-[15px] leading-[23px]"
            }`}
          />
          {createSideElement(rightComponent ?? valueCount)}
        </div>

        {hint ? (
          <p
            className={`mt-1 text-sm leading-[22px] whitespace-pre-line ${
              hasError || overvalued ? "text-red-500" : "text-gray-500"
            }`}
          >
            {hint}
          </p>
        ) : overvalued ? (
          <p className="mt-1 text-sm leading-[22px] text-red-500 whitespace-pre-line">
            최대 {maxLength}자까지 입력할 수 있습니다.
          </p>
        ) : null}
      </div>
    );
  }
);

const createSideElement = (node: React.ReactNode) => {
  if (!node) return null;
  if (typeof node === "string") {
    return (
      <div className="text-[13px] font-normal leading-[19px] text-gray-500">
        {node}
      </div>
    );
  }
  return node;
};

const createLabelElement = (node: React.ReactNode) => {
  if (!node) return null;
  if (typeof node === "string") {
    return (
      <h3 className="mt-0 mb-[6px] text-sm font-medium leading-[22px] text-gray-700">
        {node}
      </h3>
    );
  }
  return node;
};
