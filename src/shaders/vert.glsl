uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
varying vec2 v_uv;

void main() {
  v_uv = uv;
  vec3 pos = position;

  float globalWave = sin(u_time * 0.5 + (uv.x + uv.y) * 2.0);
  pos.z += globalWave * 0.02;

  vec2 mUV = u_mouse / u_resolution;
  float distMouse = distance(uv, mUV);
  float localWave = sin((distMouse - u_time * 0.3) * 13.0);
  pos.z += localWave * 0.1;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}