export default function PlayPage() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#080706",
      }}
    >
      <iframe
        src="/game.html"
        title="MOVE — Dumbbell Challenge"
        allow="camera; geolocation; clipboard-write; web-share"
        style={{ border: 0, width: "100%", height: "100dvh", display: "block" }}
      />
    </div>
  );
}
