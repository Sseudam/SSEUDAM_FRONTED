import React, { useRef, useState } from "react";

const Scan = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // 카메라 활성화 함수
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // 후면 카메라 우선
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("카메라를 활성화할 수 없습니다.", error);
    }
  };

  // 스캔한 화면 캡처 함수
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      // 캔버스에 현재 영상 프레임 그리기
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // 캔버스 데이터를 이미지 URL로 변환
      const imageData = canvas.toDataURL("image/png");
      setCapturedImage(imageData); // 캡처된 이미지 저장
    }
  };

  // 컴포넌트가 로드될 때 카메라 시작
  React.useEffect(() => {
    startCamera();
    return () => {
      // 컴포넌트가 언마운트될 때 카메라 스트림 정지
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-6">
      <h1 className="text-xl font-bold text-gray-900 mb-4">바코드 스캔</h1>

      {/* 카메라 프리뷰 */}
      {!capturedImage && (
        <div className="relative w-full max-w-sm">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="rounded-lg border border-gray-200 w-full"
          />
          <button
            onClick={captureImage}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#6804FF] text-white px-4 py-2 rounded-full"
          >
            캡처하기
          </button>
        </div>
      )}

      {/* 캡처된 이미지 */}
      {capturedImage && (
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium text-gray-700 mb-4">캡처된 화면</h2>
          <img
            src={capturedImage}
            alt="캡처된 화면"
            className="rounded-lg border border-gray-200 mb-4"
          />
          <button
            onClick={() => setCapturedImage(null)}
            className="bg-[#6804FF] text-white px-4 py-2 rounded-lg"
          >
            다시 스캔하기
          </button>
        </div>
      )}

      {/* 캔버스 (보이지 않게 숨김) */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default Scan;