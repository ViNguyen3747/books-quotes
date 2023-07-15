import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  CameraControls,
  PerspectiveCamera,
  Center,
  Loader,
  Scroll,
  useGLTF,
  Text,
  Html,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
const FAIRY_COLORS = [
  "#a28eb8",
  "#a2d2ff",
  "#ffc0d7",
  "#b4dbfe",
  "#ffc8dd",
  "#abd7ff",
  "#ffb7d2",
  "#bde0fe",
  "#cdb4db",
  "#ffafcc",
];

const SCIFI_COLORS = [
  "#1b4965",
  "#f95738",
  "#fb8500",
  "#415a77",
  "#ffb703",
  "#2DBEC0",
];
const PAGE_COLOR = "#f3efe0";
const CREAM_COLOR = "#fff1e6";
export default () => {
  const { nodes } = useGLTF("./book.glb");
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <>
      <group position={[w, -1.1, -3]}>
        <group scale={0.3}>
          {[...Array(10)].map((_, i) => (
            <mesh key={i} geometry={nodes[`fairy${i + 1}`].geometry}>
              <meshStandardMaterial color={FAIRY_COLORS[i]} />
            </mesh>
          ))}
          <mesh geometry={nodes.page.geometry}>
            <meshStandardMaterial color={PAGE_COLOR} />
          </mesh>
          <mesh geometry={nodes.cream.geometry}>
            <meshToonMaterial color={CREAM_COLOR} />
          </mesh>
        </group>
      </group>
      <group position={[w * 3, -1.1, -3]}>
        <group scale={0.3}>
          {[...Array(6)].map((_, i) => (
            <mesh key={i} geometry={nodes[`scifi${i + 1}`].geometry}>
              <meshStandardMaterial color={SCIFI_COLORS[i]} />
            </mesh>
          ))}
          <mesh geometry={nodes.scifi_page.geometry}>
            <meshStandardMaterial color={PAGE_COLOR} />
          </mesh>
          <mesh geometry={nodes.scifi_cream.geometry}>
            <meshStandardMaterial color={CREAM_COLOR} />
          </mesh>
          <mesh geometry={nodes.moon_darkgrey.geometry}>
            <meshStandardMaterial color={"#B5B5B5"} />
          </mesh>
          <mesh geometry={nodes.moon_grey.geometry}>
            <meshStandardMaterial color={"#E1E1E1"} />
          </mesh>
          <mesh geometry={nodes.paperplane.geometry}>
            <meshStandardMaterial side={THREE.DoubleSide} color={CREAM_COLOR} />
          </mesh>
          <mesh geometry={nodes.scifi_black.geometry}>
            <meshStandardMaterial color={"#2b2c28"} />
          </mesh>
          <mesh geometry={nodes.scifi_greenblue.geometry}>
            <meshStandardMaterial color={"#A7D5E1"} />
          </mesh>
          <mesh geometry={nodes.scifi_screengreen.geometry}>
            <meshStandardMaterial color={"#8FC93A"} />
          </mesh>
          <mesh geometry={nodes.scifi_screenpink.geometry}>
            <meshStandardMaterial color={"#F72585"} />
          </mesh>
        </group>
      </group>
      <group position={[w * 5, -1.1, -3]}>
        <group scale={0.3}>
          {[...Array(10)].map((_, i) => (
            <mesh key={i} geometry={nodes[`fairy${i + 1}`].geometry}>
              <meshStandardMaterial color={FAIRY_COLORS[i]} />
            </mesh>
          ))}
          <mesh geometry={nodes.page.geometry}>
            <meshStandardMaterial color={PAGE_COLOR} />
          </mesh>
          <mesh geometry={nodes.cream.geometry}>
            <meshToonMaterial color={CREAM_COLOR} />
          </mesh>
        </group>
      </group>
      <group position={[w * 7, -1.1, -3]}>
        <group scale={0.3}>
          {[...Array(10)].map((_, i) => (
            <mesh key={i} geometry={nodes[`fairy${i + 1}`].geometry}>
              <meshStandardMaterial color={FAIRY_COLORS[i]} />
            </mesh>
          ))}
          <mesh geometry={nodes.page.geometry}>
            <meshStandardMaterial color={PAGE_COLOR} />
          </mesh>
          <mesh geometry={nodes.cream.geometry}>
            <meshToonMaterial color={CREAM_COLOR} />
          </mesh>
        </group>
      </group>
    </>
  );
};
