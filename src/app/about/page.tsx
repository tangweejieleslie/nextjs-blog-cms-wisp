import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `
## About Me



Hey there, I'm Leslie.







`;

// ![Kiyozumi Dera, Kyoto, Japan](https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
// ![Leslie](https://avatars.githubusercontent.com/u/49802619?v=4)
// ![Kelingking Beach, Indonesia](https://images.unsplash.com/photo-1534131197842-bafa0b820f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fHw%3D)

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Leslie",
    openGraph: {
      title: "About Me",
      description: "Learn more about Leslie",
      images: [
        signOgImageUrl({
          title: "Leslie",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
