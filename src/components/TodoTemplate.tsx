export default function TodoTemplate({ children }: { children: React.ReactNode }) {
  return <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>{children}</div>;
}