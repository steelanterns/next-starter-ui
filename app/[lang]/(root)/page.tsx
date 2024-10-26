import HomeClient from "@/components/home/home-client";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Home = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  const { page } = await getDictionary(lang);
  return <HomeClient />;
};

export default Home;
