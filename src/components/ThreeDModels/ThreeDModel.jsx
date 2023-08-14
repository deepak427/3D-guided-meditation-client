import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useLocation } from "react-router-dom";
import "./ThreeDModel.css";

const ThreeDModel = () => {
  
  return (
    <div className="fullscreen-container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls maxDistance={400} />
      </Canvas>
    </div>
  );
};

const Model = () => {
  const location = useLocation();
  const receivedData = location.state;
  
  const { scene } = useGLTF(receivedData.url); // Load GLB file

  return <primitive object={scene} />;
};

export default ThreeDModel;
