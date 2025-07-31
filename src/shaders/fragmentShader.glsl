uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform float u_colorSpeed;
uniform float u_colorFreq;
uniform float u_colorAmp;
uniform float u_rippleFreq;
uniform float u_rippleAmp;
varying vec2 v_uv;

void main() {
  // 배경 파동용 비율 보정
  vec2 uv = v_uv;
  uv.x *= u_resolution.x / u_resolution.y;

  // 기본 배경 파동 색상
  float colorWave = 0.5 + u_colorAmp * sin(u_time * u_colorSpeed + (uv.x + uv.y) * u_colorFreq);
  vec3 baseColor = mix(u_color1, u_color2, clamp(colorWave, 0.0, 1.0));

  // 마우스 좌표 및 비율 보정
  vec2 rippleUV = v_uv;
  vec2 mUV = u_mouse / u_resolution;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  rippleUV *= aspect;
  mUV *= aspect;

  float distMouse = distance(rippleUV, mUV);

  // 기존 ripple 애니메이션
  float ripple = sin((distMouse - u_time * 0.5) * u_rippleFreq);
  float mask = 1.0 - smoothstep(0.0, 0.3, distMouse);
  vec3 highlight = vec3(1.0, 0.9, 0.1); // 노란색 highlight
  vec3 rippleColor = baseColor + ripple * u_rippleAmp;

  // ⭐️ 물든 배경 효과 (stain처럼 천천히 스며들기)
  float stainStrength = exp(-distMouse * 3.0); // 중심일수록 강하게
  vec3 stainedColor = mix(baseColor, highlight, stainStrength * 0.3); // 0.3은 퍼짐 강도

  // ripple과 stain 합쳐서 최종 색상
  vec3 finalColor = mix(stainedColor, rippleColor, mask);

  gl_FragColor = vec4(finalColor, 1.0);
}
