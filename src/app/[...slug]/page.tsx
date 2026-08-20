import App from "../../components/app";
export default async function CatchAll({ params }: { params: Promise<{ slug: string[] }> }) { const { slug } = await params; return <App page={slug[0] || "dashboard"} id={slug[1]} />; }
