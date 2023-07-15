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

const JUNGLE_COLORS = [
  "#6A8532",
  "#87A330",
  "#A1C349",
  "#f48c06",
  "#f2542d",
  "#7f5539",
];

const MAGIC_COLORS = [
  "#370617",
  "#6A040F",
  "#9D0208",
  "#D00000",
  "#E85D04",
  "#FBB539",
];
const PAGE_COLOR = "#f3efe0";
const CREAM_COLOR = "#f4e9cd";
const BLACK_COLOR = "#2b2c28";
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
            <meshStandardMaterial color={BLACK_COLOR} />
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
      <group position={[w * 5.05, -1.1, -3]}>
        <group scale={0.3}>
          {[...Array(6)].map((_, i) => (
            <mesh key={i} geometry={nodes[`jungle${i + 1}`].geometry}>
              <meshStandardMaterial color={JUNGLE_COLORS[i]} />
            </mesh>
          ))}
          <mesh geometry={nodes.jungle_page.geometry}>
            <meshStandardMaterial color={PAGE_COLOR} />
          </mesh>
          <mesh geometry={nodes.jungle_cream.geometry}>
            <meshToonMaterial color={CREAM_COLOR} />
          </mesh>
          <mesh geometry={nodes.jungle_black.geometry}>
            <meshToonMaterial color={BLACK_COLOR} />
          </mesh>
          <mesh geometry={nodes.jungle_blue.geometry}>
            <meshToonMaterial color={"#A7D5E1"} />
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
