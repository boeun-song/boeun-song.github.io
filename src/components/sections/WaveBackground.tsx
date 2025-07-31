import { useEffect, useRef } from "react";
import * as THREE from "three";
import vertexShader from "~apps/shaders/vert.glsl";
import fragmentShader from "~apps/shaders/fragmentShader.glsl";

export const WaveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      mesh: THREE.Mesh;
    const fov = 45;
    const near = 0.1;
    const far = 100;
    const z = 2; // 카메라 z 위치

    const uniforms = {
      u_time: { value: 0.0 },
      u_mouse: { value: new THREE.Vector2(0.0, 0.0) },
      u_resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      u_color1: { value: new THREE.Color(0xfff7f0) },
      u_color2: { value: new THREE.Color(0xd4fff2) },
      u_colorSpeed: { value: 1.0 },
      u_colorFreq: { value: 4.0 },
      u_colorAmp: { value: 0.2 },
      u_rippleFreq: { value: 28.0 },
      u_rippleAmp: { value: 0.03 },
    };

    let animationId: number;

    function onMouseMove(event: MouseEvent) {
      uniforms.u_mouse.value.x = event.clientX;
      uniforms.u_mouse.value.y = window.innerHeight - event.clientY;
    }

    function onResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);

      // 🟡 Plane 크기 재계산
      const heightAtZ = 2 * Math.tan((fov * Math.PI) / 360) * z;
      const widthAtZ = heightAtZ * camera.aspect;
      mesh.geometry.dispose();
      mesh.geometry = new THREE.PlaneGeometry(widthAtZ, heightAtZ, 200, 200);
    }

    const init = () => {
      scene = new THREE.Scene();

      const width = window.innerWidth;
      const height = window.innerHeight;

      camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
      camera.position.z = z;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.setClearColor("white");
      containerRef.current?.appendChild(renderer.domElement);

      // ✅ 여기서 정확한 Plane 크기 계산
      const heightAtZ = 2 * Math.tan((fov * Math.PI) / 360) * z;
      const widthAtZ = heightAtZ * camera.aspect;

      const geometry = new THREE.PlaneGeometry(widthAtZ, heightAtZ, 200, 200);
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        side: THREE.DoubleSide,
      });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onResize);

      const animate = () => {
        uniforms.u_time.value += 0.01;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };

      animate();
    };

    init();

    return () => {
      if (containerRef.current) {
        cancelAnimationFrame(animationId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);

        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};
