export const metadata = {
  title: "Admin — Billing",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return <div className="admin-area">{children}</div>;
}
