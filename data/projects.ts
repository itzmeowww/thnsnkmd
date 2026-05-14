import type { Tool } from "./types/tools";
import type { Localized } from "@/lib/localized";

export type Project = {
  title: Localized;
  body: Localized;
  detail?: Localized;
  since?: Date;
  links: { href: string; title: string }[];
  slug: string;
  previews: Image[];
  comments: Comment[];
  tools: Tool[];
};

type Comment = {
  comment: Localized;
  author: string;
  date?: Date;
};

type Image = {
  url: string;
  width: number;
  height: number;
  alt?: Localized;
};

export const projects: Project[] = [
  {
    title: { en: "AYUMI", ja: "AYUMI" },
    body: {
      en: "Trace the paths of those who came before you",
      ja: "先人たちが歩んだ道をたどる",
    },
    detail: {
      en: "AYUMI is a career navigation web app built at a hackathon held at APU (Ritsumeikan Asia Pacific University) in March 2026. Inspired by GitHub's commit history, it lets users trace the life decisions of role models — visualized as a tree — and chat with an AI persona based on their career journey. Users log their own turning points and explore alternative paths they didn't take, helping them decide their next move.",
      ja: "AYUMIは、2026年3月にAPU（立命館アジア太平洋大学）で開催されたハッカソンで作成されたキャリアナビゲーションのウェブアプリです。GitHubのコミット履歴に着想を得て、ロールモデルの人生の選択を木構造で可視化し、その人のキャリアを基にしたAIペルソナと対話できます。ユーザーは自分の転機を記録し、選ばなかった別の道を探ることで、次の一歩を決める助けにできます。",
    },
    since: new Date("March, 2026"),
    links: [
      {
        title: "GitHub",
        href: "https://github.com/Asheze1127/hackathon-2026-in-apu",
      },
      {
        title: "Article",
        href: "https://www.isct.ac.jp/ja/news/iu4es34ajfdr",
      },
    ],
    previews: [
      {
        url: "/images/ayumi/icon.png",
        width: 1444,
        height: 1444,
        alt: { en: "AYUMI icon", ja: "AYUMIアイコン" },
      },
      {
        url: "/images/ayumi/home.png",
        width: 1570,
        height: 2932,
        alt: { en: "Life decision tree", ja: "人生の選択ツリー" },
      },
      {
        url: "/images/ayumi/search.png",
        width: 1570,
        height: 2932,
        alt: { en: "Role model search", ja: "ロールモデル検索" },
      },
      {
        url: "/images/ayumi/rolemodel.png",
        width: 1570,
        height: 2932,
        alt: { en: "Role model profile", ja: "ロールモデルのプロフィール" },
      },
      {
        url: "/images/ayumi/rolemodel-2.png",
        width: 1570,
        height: 2932,
        alt: { en: "Decision path timeline", ja: "選択の道のりタイムライン" },
      },
      {
        url: "/images/ayumi/chat-model.png",
        width: 1570,
        height: 2932,
        alt: { en: "AI persona chat", ja: "AIペルソナとのチャット" },
      },
      {
        url: "/images/ayumi/chat.png",
        width: 1570,
        height: 2932,
        alt: {
          en: "Direct chat with role model",
          ja: "ロールモデルとの直接チャット",
        },
      },
    ],
    slug: "ayumi",
    tools: ["nextjs", "typescript", "tailwind", "supabase", "prisma", "openai"],
    comments: [
      {
        comment: {
          en: "Awarded 2nd place at APU Hackathon 2026.",
          ja: "APUハッカソン2026で第2位を受賞しました。",
        },
        author: "Thanasan Kumdee",
        date: new Date("16 March, 2026"),
      },
      {
        comment: {
          en: "I proposed the idea — I wanted to see a tree of my own life.",
          ja: "このアイデアを提案したのは僕です。自分の人生のツリーを見てみたかったんです。",
        },
        author: "Thanasan Kumdee",
        date: new Date("16 March, 2026"),
      },
      {
        comment: {
          en: "Joined solo and was placed into a team with 2 members from Kyushu Institute of Technology (KIT) and 2 from Science Tokyo. Competed against 12 teams from three universities.",
          ja: "個人参加で、九州工業大学（KIT）の2名と東京科学大学の2名と同じチームになりました。3大学から集まった12チームと競いました。",
        },
        author: "Thanasan Kumdee",
        date: new Date("16 March, 2026"),
      },
    ],
  },

  {
    title: { en: "mossify", ja: "mossify" },
    body: {
      en: "The app that grows while you live",
      ja: "あなたが生きるあいだに育つアプリ",
    },
    detail: {
      en: "Mossify is a unique iOS app that wants you to live your life. Download it and see how it grows with you! Step away. Breathe. Come back to a little world that quietly grew while you were gone.",
      ja: "Mossifyは、あなたに自分の人生を生きてほしいユニークなiOSアプリです。ダウンロードして、あなたと一緒に育っていく様子を見てみてください！スマホから離れて、深呼吸して、戻ってきたら、知らないうちに静かに育った小さな世界が待っています。",
    },
    since: new Date("January, 2026"),
    links: [
      {
        title: "Download",
        href: "https://apps.apple.com/jp/app/mossify/id6755780523",
      },
      {
        title: "Learn More",
        href: "https://mossify.thnsnkmd.com",
      },
    ],
    previews: [
      {
        url: "/images/mossify/preview.jpeg",
        width: 1200,
        height: 1200,
      },
      {
        url: "/images/mossify/screen1.jpg",
        width: 1242,
        height: 2688,
      },
      {
        url: "/images/mossify/screen2.jpg",
        width: 1242,
        height: 2688,
      },
      {
        url: "/images/mossify/screen3.jpg",
        width: 1242,
        height: 2688,
      },
      {
        url: "/images/mossify/screen4.jpg",
        width: 1242,
        height: 2688,
      },
    ],
    comments: [
      {
        comment: {
          en: "Please download and try it out! I would love to hear your feedback.",
          ja: "ぜひダウンロードして使ってみてください！感想を聞かせていただけると嬉しいです。",
        },
        author: "Thanasan Kumdee",
      },
    ],
    slug: "mossify",
    tools: ["swiftui"],
  },

  {
    title: {
      en: "TSAJ Kanto Virtual Run",
      ja: "TSAJ関東バーチャルラン",
    },
    body: {
      en: "A virtual run event website organized by the Thai Student Association in Japan (TSAJ) in the Kanto region.",
      ja: "在日タイ人留学生協会（TSAJ）関東支部が主催したバーチャルランイベントのウェブサイトです。",
    },
    detail: {
      en: "A complete virtual run event website featuring registration, a live leaderboard, and activity tracking. The event was held in 2025 and attracted over 10 participants. Built with Next.js and Tailwind CSS, using Supabase for authentication and database. The website is no longer maintained and is now unavailable.",
      ja: "登録機能、ライブのリーダーボード、活動記録機能を備えたバーチャルランイベントのウェブサイトです。2025年に開催され、10名以上が参加しました。Next.jsとTailwind CSSで構築し、認証とデータベースにSupabaseを使用しました。現在はメンテナンスを終了しており、公開されていません。",
    },
    since: new Date("November, 2025"),
    links: [],
    previews: [
      {
        url: "/images/tsaj-run/post.jpg",
        width: 1280,
        height: 1280,
      },
      {
        url: "/images/tsaj-run/IMG_5688.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/tsaj-run/IMG_5689.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/tsaj-run/IMG_5690.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/tsaj-run/IMG_5691.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/tsaj-run/IMG_5692.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/tsaj-run/IMG_5693.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/tsaj-run/IMG_5694.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/tsaj-run/IMG_5696.PNG",
        width: 1170,
        height: 2532,
      },
    ],
    slug: "tsaj-run",
    tools: ["nextjs", "tailwind", "supabase"],
    comments: [
      {
        comment: {
          en: "Over 10 participants might seem small, but for an online community event like this, it was a big success. It was a great experience building something end-to-end for a real event with real users.",
          ja: "参加者10名以上というと少なく感じるかもしれませんが、このようなオンラインコミュニティのイベントとしては大成功でした。実際のユーザーが使う本物のイベントを、最初から最後まで自分で作り上げた良い経験になりました。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "Special thanks to P'Mim for creating the illustrations for the event and the award design — they really brought the whole thing together.",
          ja: "イベントのイラストと賞のデザインを作ってくれたミムさんに感謝します。全体の雰囲気をうまくまとめてくれました。",
        },
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: { en: "Thrivre", ja: "Thrivre" },
    body: {
      en: "Creating a world where everyone lives with purpose",
      ja: "誰もが目的を持って生きられる世界をつくる",
    },
    detail: {
      en: "Trusted by Thrivre to create the website for their impactful career coaching service based in Bangkok, Thailand, helping professionals align their strengths and values with meaningful work. The website features a 5-step Career Design process and comprehensive Get Hired Kit including resume writing, LinkedIn optimization, and interview preparation, showcasing a modern, professional design with dark aesthetics and responsive layouts optimized for both mobile and desktop users.",
      ja: "タイ・バンコクを拠点に、プロフェッショナルが自分の強みや価値観と意義のある仕事を結び付ける手助けをしているキャリアコーチングサービス「Thrivre」のウェブサイト制作を任せていただきました。サイトには5ステップの「キャリアデザイン」プロセスと、レジュメ作成・LinkedIn最適化・面接対策などを含む充実した「Get Hired Kit」が掲載されています。ダークトーンの洗練されたデザインで、モバイル・デスクトップ双方に最適化されたレスポンシブレイアウトを実現しました。",
    },
    since: new Date("Jan, 2026"),
    links: [
      {
        title: "Website",
        href: "https://www.thrivre.com",
      },
    ],
    previews: [
      {
        url: "/images/thrivre/Home page.png",
        width: 2400,
        height: 1260,
        alt: { en: "Thrivre", ja: "Thrivre" },
      },
      {
        url: "/images/thrivre/home.png",
        width: 3104,
        height: 1962,
      },
      {
        url: "/images/thrivre/stories.png",
        width: 3104,
        height: 1962,
      },
      {
        url: "/images/thrivre/story-detail.png",
        width: 3104,
        height: 1962,
      },
      {
        url: "/images/thrivre/career-design.png",
        width: 3104,
        height: 1962,
      },
      {
        url: "/images/thrivre/get-hired-kit.png",
        width: 3104,
        height: 1962,
      },
      {
        url: "/images/thrivre/pricing.png",
        width: 3104,
        height: 1962,
      },
      {
        url: "/images/thrivre/about.png",
        width: 3104,
        height: 1962,
      },
      {
        url: "/images/thrivre/contact.png",
        width: 3104,
        height: 1962,
      },
    ],
    slug: "thrivre",
    tools: ["nextjs", "tailwind", "strapi"],
    comments: [
      {
        comment: {
          en: "The design was created by Jessie, special thanks to her for designing such an incredible website.",
          ja: "デザインはJessieが手掛けてくれました。素晴らしいウェブサイトをデザインしてくれたことに感謝します。",
        },
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: { en: "HiNan!", ja: "HiNan!" },
    body: {
      en: "Make evacuation drills a habit",
      ja: "避難訓練を習慣に",
    },
    detail: {
      en: "An iOS app that gamifies disaster preparedness by walking to nearby shelters using AI-generated scenarios. Transforms evacuation training from a mandatory activity to a fun, repeatable experience through badges and challenges. Developed in 2 days at JPHACKS 2025 HackDay Tokyo.",
      ja: "AIが生成したシナリオを使い、近くの避難所まで実際に歩くことで防災をゲーム化したiOSアプリです。バッジやチャレンジを通じて、避難訓練を「やらされる活動」から「楽しく繰り返したくなる体験」に変えます。JPHACKS 2025 HackDay Tokyoで2日間で開発しました。",
    },
    since: new Date("October, 2025"),
    links: [
      {
        title: "GitHub",
        href: "https://github.com/jphacks/tk_a_2505",
      },
      {
        title: "Project Page",
        href: "https://jphacks.github.io/tk_a_2505/en/",
      },
      {
        title: "Demo Video",
        href: "https://youtu.be/QmWcuJ1-3J0",
      },
    ],

    previews: [
      {
        url: "/images/jphacks2025/icon.jpeg",
        width: 1200,
        height: 1200,
      },
      {
        url: "/images/jphacks2025/banner.jpg",
        width: 3000,
        height: 947,
      },
      {
        url: "/images/jphacks2025/frame1.jpeg",
        width: 1200,
        height: 1200,
      },
      {
        url: "/images/jphacks2025/frame2.jpeg",
        width: 1200,
        height: 1200,
      },
      {
        url: "/images/jphacks2025/frame3.jpeg",
        width: 1200,
        height: 1200,
      },
    ],
    slug: "hinan",
    tools: ["swiftui", "gemini", "claude"],
    comments: [
      {
        comment: {
          en: "Advanced to the final round of JPHACKS 2025, one of Japan's largest hackathons. Received Sponsor Awards from MEEQ Inc. and SoftBank during the final competition.",
          ja: "日本最大級のハッカソンの一つであるJPHACKS 2025の決勝に進出しました。決勝では株式会社MEEQとソフトバンクからスポンサー賞をいただきました。",
        },
        author: "Thanasan Kumdee",
        date: new Date("November 9, 2025"),
      },
      {
        comment: {
          en: "Previously received Corporate Award from Kawada Techno System Co., Ltd. at JPHACKS 2025 HackDay Tokyo (A Schedule) held at the University of Tokyo on October 11–12.",
          ja: "それに先立ち、10月11〜12日に東京大学で開催されたJPHACKS 2025 HackDay Tokyo（Aスケジュール）で株式会社カワダテクノシステム様から企業賞をいただきました。",
        },
        author: "Thanasan Kumdee",
        date: new Date("October 12, 2025"),
      },
      {
        comment: {
          en: "Served as the iOS developer for our team AI4U (tk_a_2505). Implemented the app, pushed it to production, and navigated the Apple App Review process. Also created the project's landing website.",
          ja: "チームAI4U（tk_a_2505）でiOS開発を担当しました。アプリの実装、本番リリース、Appleの審査対応まで一通り対応し、プロジェクトのランディングサイトも制作しました。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "I primarily worked on SwiftUI maps implementation and localization for the app.",
          ja: "主にSwiftUIによる地図の実装と、アプリのローカライゼーションを担当しました。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "Used Gemini 2.5 Flash for generating unique daily disaster scenarios and Flux.1 Schnell for image generation.",
          ja: "毎日違う災害シナリオの生成にはGemini 2.5 Flashを、画像生成にはFlux.1 Schnellを使用しました。",
        },
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: { en: "Postcard", ja: "Postcard" },
    body: {
      en: "Post your message on a paper plane",
      ja: "メッセージを紙飛行機にのせて飛ばそう",
    },
    detail: {
      en: "An SNS where posts fly like paper planes powered by logistics data as wind. Messages are randomly delivered based on open logistics data from Project LINKS, creating a unique experience where delivery destinations are determined by the wind.",
      ja: "投稿が紙飛行機のように飛んでいくSNSで、物流データを「風」として活用しています。Project LINKSが公開している物流データを基にメッセージがランダムに届けられ、配送先が風によって決まるユニークな体験を実現しました。",
    },
    since: new Date("September, 2025"),
    links: [
      {
        title: "GitHub",
        href: "https://github.com/Riochin/postcard",
      },
      {
        title: "Article",
        href: "https://topaz.dev/projects/9d70dd666df36b317b20",
      },
    ],
    previews: [
      {
        url: "/images/postcard/icon.png",
        width: 1024,
        height: 1024,
      },
    ],
    slug: "postcard",
    tools: ["nextjs", "typescript", "python", "claude"],
    comments: [
      {
        comment: {
          en: "We reimagined logistics data as 'wind' that carries posts across the map, making data feel alive and interactive.",
          ja: "物流データを、地図上の投稿を運ぶ「風」として捉え直すことで、データが生きていて触れられるような感覚を作り出しました。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "Used Claude Code extensively for development. To save tokens, we wrote prompts in English, reset conversations regularly, and created task instructions with Gemini before passing them to Claude.",
          ja: "開発ではClaude Codeを多用しました。トークンを節約するために、プロンプトは英語で書き、会話をこまめにリセットし、タスクの指示はGeminiで作成してからClaudeに渡すようにしました。",
        },
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: { en: "t-lub", ja: "t-lub" },
    body: { en: "Share Hidden Gems", ja: "隠れた名所をシェアしよう" },
    since: new Date("October, 2024"),
    links: [
      {
        title: "Instagram",
        href: "https://www.instagram.com/tlub.official",
      },
      {
        title: "App Store",
        href: "https://apps.apple.com/app/t-lub/id6670796341",
      },
      {
        title: "Website",
        href: "https://t-lub.com",
      },
    ],
    previews: [
      {
        url: "/images/tlub/bg.jpg",
        width: 1920,
        height: 1080,
      },
      {
        url: "/images/tlub/0x0ss.png",
        width: 1320,
        height: 2868,
      },
      {
        url: "/images/tlub/0x0ss-2.png",
        width: 1320,
        height: 2868,
      },
      {
        url: "/images/tlub/0x0ss-3.png",
        width: 1320,
        height: 2868,
      },
      {
        url: "/images/tlub/0x0ss-4.png",
        width: 1320,
        height: 2868,
      },
      {
        url: "/images/tlub/0x0ss-5.png",
        width: 1320,
        height: 2868,
      },
      {
        url: "/images/tlub/0x0ss-6.png",
        width: 1320,
        height: 2868,
      },
      {
        url: "/images/tlub/0x0ss-7.png",
        width: 1320,
        height: 2868,
      },

      {
        url: "/images/tlub/0x0ss-8.png",
        width: 1320,
        height: 2868,
      },
    ],
    slug: "tlub",
    tools: ["swiftui", "firebase"],
    comments: [],
    detail: {
      en: "t-lub - Map Your World, Share Your Journey We created this app because we wanted a simple way to REMEMBER the places that made our days, DISCOVER new spots that bring joy, and SHARE all the little gems we find with the PEOPLE WHO MATTER.",
      ja: "t-lub - 自分の世界を地図に、ジャーニーをシェアしよう。一日を彩ってくれた場所を「覚えておく」、心ときめく新しいスポットを「見つける」、大切な人と小さな名所を「シェアする」——そのためのシンプルな方法が欲しくて、このアプリを作りました。",
    },
  },
  {
    title: { en: "Fuguru", ja: "Fuguru" },
    body: { en: "Your Personalized Content", ja: "あなただけのパーソナライズ教材" },
    since: new Date("February, 2025"),
    links: [
      {
        title: "Zenn Article",
        href: "https://zenn.dev/yay1/articles/4c2615d147089c",
      },
      {
        title: "Demo",
        href: "https://youtu.be/KaBPv0tJiAE",
      },
    ],
    comments: [],
    previews: [
      {
        url: "/images/fuguru/bg.webp",
        width: 1920,
        height: 1080,
      },
    ],
    slug: "fuguru",
    tools: ["flutter", "firebase", "gcp"],
    detail: {
      en: "Fuguru automatically detects information that the user already knows and removes it from new materials, enhancing learning efficiency. This allows users to focus on acquiring only the necessary knowledge without wasting time on redundant content.",
      ja: "Fuguruは、ユーザーがすでに知っている情報を自動で検出し、新しい教材から取り除くことで学習効率を高めます。これにより、重複する内容に時間を取られず、必要な知識の習得だけに集中できます。",
    },
  },
  {
    title: { en: "Ciary", ja: "Ciary" },
    body: {
      en: "A diary that cares about you",
      ja: "あなたを気にかけてくれる日記",
    },
    since: new Date("October, 2024"),
    links: [
      {
        title:
          "東京工業大学が開催した生成AIを活用したアプリ作成コンテストに東京医科歯科大学とNECが協力",
        href: "https://prtimes.jp/main/html/rd/p/000000688.000078149.html",
      },
    ],
    previews: [
      {
        url: "/images/ciary/bg.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    slug: "ciary",
    tools: ["openai", "nextjs", "tailwind"],
    comments: [],
    detail: { en: "", ja: "" },
  },

  {
    title: { en: "Yondaaa", ja: "Yondaaa" },
    body: {
      en: "iOS application for exchanging and giving away books.",
      ja: "本を交換したり譲ったりするためのiOSアプリです。",
    },
    detail: {
      en: "This project is a part of creative programming class at TokyoTech.",
      ja: "このプロジェクトは、東京工業大学のクリエイティブプログラミングの授業の一環として制作しました。",
    },
    since: new Date("August, 2024"),

    links: [
      {
        href: "https://apps.apple.com/jp/app/yondaaa/id6503911356?l=en-US",
        title: "App Store",
      },
      {
        href: "https://yondaaa.thnsnkmd.com",
        title: "Homepage",
      },
    ],
    previews: [
      {
        url: "/images/yondaaa/00.png",
        width: 1920,
        height: 1080,
      },
      {
        url: "/images/yondaaa/01.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/yondaaa/02.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/yondaaa/03.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/yondaaa/04.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/yondaaa/05.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/yondaaa/06.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/yondaaa/07.PNG",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/yondaaa/08.PNG",
        width: 1170,
        height: 2532,
      },
    ],
    slug: "yondaaa",
    tools: ["swiftui", "rails"],
    comments: [
      {
        comment: {
          en: "I lost the source of frontend so I have remake it 😭.",
          ja: "フロントエンドのソースを失くしてしまって、作り直すしかなかったです😭。",
        },
        author: "Thanasan Kumdee",
        date: new Date("Aug 19, 2024"),
      },
    ],
  },
  {
    title: {
      en: "Snake: comparing search algos",
      ja: "Snake：探索アルゴリズム比較",
    },
    body: {
      en: "A simulation of snake using different search algorithms.",
      ja: "さまざまな探索アルゴリズムを使ったスネークゲームのシミュレーションです。",
    },
    detail: {
      en: "This project is a part of artificial intelligent class at TokyoTech. Five search algorithms are compared.",
      ja: "このプロジェクトは、東京工業大学の人工知能の授業の一環として制作しました。5つの探索アルゴリズムを比較しています。",
    },
    since: new Date("August, 2024"),

    links: [
      {
        href: "https://snake.thnsnkmd.com/",
        title: "Visit",
      },
      {
        href: "https://github.com/itzmeowww/snake-search",
        title: "GitHub",
      },
    ],
    previews: [
      {
        url: "/images/snake-search/00.png",
        height: 1652,
        width: 2880,
      },
    ],
    slug: "snake-search",
    tools: ["nextjs", "tailwind", "shadcn/ui"],
    comments: [],
  },
  {
    title: { en: "Napori Mobile Order", ja: "ナポリ モバイルオーダー" },
    body: {
      en: "An online food ordering service for Napori, a restaurant in Nishi-Koyama, Tokyo.",
      ja: "東京・西小山にあるレストラン「ナポリ」のためのオンラインフード注文サービスです。",
    },
    detail: {
      en: "Customers can order by scanning the QR code on the table. The management dashboard handles inventory, order history, and statistical analysis.",
      ja: "お客様はテーブルのQRコードを読み取って注文できます。管理ダッシュボードでは在庫、注文履歴、統計分析を一元管理できます。",
    },
    since: new Date("December, 2023"),
    links: [
      {
        href: "https://youtu.be/uqc1EG9HlCw",
        title: "Demo Video",
      },
    ],
    slug: "napori",
    tools: ["nextjs", "tailwind", "prisma", "typescript"],

    previews: [
      {
        url: "/images/napori/01.png",
        width: 2880,
        height: 1658,
        alt: { en: "Customer's page", ja: "お客様用ページ" },
      },
      {
        url: "/images/napori/02.png",
        width: 2880,
        height: 1666,
        alt: { en: "Admin's page - 1", ja: "管理者ページ - 1" },
      },
      {
        url: "/images/napori/03.png",
        width: 2880,
        height: 1658,
        alt: { en: "Admin's page - 2", ja: "管理者ページ - 2" },
      },
      {
        url: "/images/napori/04.png",
        width: 2880,
        height: 1660,
        alt: { en: "Admin's page - 3", ja: "管理者ページ - 3" },
      },
    ],
    comments: [
      {
        comment: {
          en: "I learned how to use the Notification API to send notifications to both browsers and phones.",
          ja: "Notification APIを使って、ブラウザとスマートフォンの両方に通知を送る方法を学びました。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "Handling databases was interesting. I had to create a partially real-time admin page to optimize costs.",
          ja: "データベースの扱いも面白かったです。コストを抑えるために、部分的にリアルタイムに動く管理ページを作る必要がありました。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "Creating statistics from the number of scanned QR codes, along with table numbers and timestamps, was one of my favorite parts.",
          ja: "QRコードのスキャン回数、テーブル番号、タイムスタンプから統計を作る部分は、特に気に入っている箇所のひとつです。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "Deciding the user flow for ordering and managing situations like when items are sold out was a valuable experience.",
          ja: "注文のユーザーフローを決めたり、品切れの状況をどう扱うかを考えたりするのは、貴重な経験になりました。",
        },
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: {
      en: "Memoiz: your second brain ",
      ja: "Memoiz：あなたの第二の脳 ",
    },
    body: {
      en: "Me and Nutchanon Taechasuk (Quatton) won the first prize from lablabai hackathon.",
      ja: "Nutchanon Taechasuk（Quatton）と僕とで、lablabaiハッカソンで第1位を獲得しました。",
    },
    detail: {
      en: "The concept of this is to use generative AI and vector database with user's dairy.",
      ja: "ユーザーの日記に対して生成AIとベクトルデータベースを組み合わせて活用する、というのがこのプロジェクトのコンセプトです。",
    },
    since: new Date("April, 2023"),

    links: [
      {
        href: "https://lablab.ai/event/ai-startup-hackathon-episode-2/we-absolutely-have-no-idea/memoiz",
        title: "Visit",
      },
    ],
    previews: [
      {
        height: 402,
        width: 720,
        url: "/images/memoiz/slide.png",
      },
    ],
    slug: "memoiz",
    tools: ["nextjs", "tailwind", "shadcn/ui", "redis"],
    comments: [
      {
        author: "Pawel Czech (Co-founder/Partner)",
        comment: {
          en: '"Super original idea. Good use of tech and connections to DB set up. I would love to see you build it further "',
          ja: '「とてもオリジナリティのあるアイデアで、技術の使い方やDBとの連携もよくできている。今後さらに発展させていくのをぜひ見てみたい。」',
        },
      },
    ],
  },
  {
    title: { en: "fahprathan5939.com", ja: "fahprathan5939.com" },
    body: {
      en: "A website for a company with a restaurant and a cafe.",
      ja: "レストランとカフェを運営する会社のウェブサイトです。",
    },
    detail: {
      en: "The website includes two subpages, one for the restaurant 'Yuan' and another for 'Etc. Cafe.' Both pages provide information such as locations, images, and menus.",
      ja: "サイトにはサブページが2つあり、ひとつはレストラン「Yuan」用、もうひとつは「Etc. Cafe」用です。それぞれのページでは場所、写真、メニューなどの情報を掲載しています。",
    },
    since: new Date("March, 2023"),
    links: [
      {
        href: "https://fahprathan5939.com",
        title: "Visit Website",
      },
    ],
    slug: "fahprathan5939",
    tools: ["nextjs", "tailwind", "typescript"],
    previews: [
      {
        url: "/images/fahprathan5939/01.png",
        height: 1668,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/02.png",
        height: 1646,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/03.png",
        height: 1646,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/04.png",
        height: 1646,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/05.png",
        height: 1646,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/06.png",
        height: 1646,
        width: 2880,
      },
    ],
    comments: [
      {
        comment: {
          en: "The website is easy to understand, with design and colors as requested. Revisions were made quickly.",
          ja: "サイトはわかりやすく、デザインや色合いも希望通り。修正対応も早く助かりました。",
        },
        author: "Fahprathan 5939 (translated)",
      },

      {
        comment: {
          en: "I learned about handling languages and sending email from form.",
          ja: "多言語対応の扱い方や、フォームからメールを送る方法について学びました。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "There are a lot of data for menu and locations, it was challenging to manage them and display them properly.",
          ja: "メニューや店舗情報のデータが多かったので、それらを管理して適切に表示するのは挑戦のしがいがありました。",
        },
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: { en: "devvingedth.com", ja: "devvingedth.com" },
    body: {
      en: "A website for consulting service with individual consultation and support to students wishing to study abroad.",
      ja: "海外留学を希望する学生への個別相談・サポートを行うコンサルティングサービスのウェブサイトです。",
    },
    since: new Date("December, 2022"),
    links: [
      {
        href: "https://devvingedth.com",
        title: "Visit Website",
      },
    ],
    slug: "devvingedth",
    previews: [
      {
        url: "/images/devvingedth/01.jpg",
        height: 2391,
        width: 1170,
      },
      {
        url: "/images/devvingedth/02.jpg",
        height: 2399,
        width: 1170,
      },
      {
        url: "/images/devvingedth/03.jpg",
        height: 2396,
        width: 1170,
      },
      {
        url: "/images/devvingedth/04.jpg",
        height: 2392,
        width: 1170,
      },
    ],
    tools: ["nextjs", "tailwind", "typescript"],
    comments: [
      {
        author: "Dawit (Founder of Devvingedth)",
        comment: {
          en: "Win did an amazing job creating a website for my college consulting company, Devving EdTh: Developing Education for Thailand. The website has a beautiful and modern design, and the layout is very user-friendly, well-suited for the target audience of students and parents. Win organized all the important information on the website brilliantly. In fact, when I had an interview with an American company for an internship, the employers mentioned that they really liked and were impressed with the website. It helped them understand and learn about my company easily. I am very pleased with my decision to have Win create the website for my company.",
          ja: "Winは、僕の大学コンサルティング会社「Devving EdTh: Developing Education for Thailand」のウェブサイトを素晴らしく仕上げてくれました。デザインは美しくモダンで、レイアウトもとても使いやすく、ターゲットである学生や保護者にぴったりです。重要な情報を見事に整理してまとめてくれました。実際、アメリカの会社のインターンの面接を受けたとき、面接官の方からウェブサイトを高く評価していただき、会社の内容がすぐに理解できたと言ってもらえました。Winに会社のサイト制作を任せて本当によかったです。",
        },
      },
    ],
  },
  {
    title: { en: "Comatresarch", ja: "Comatresarch" },
    body: {
      en: "The official website of a Comat research group that introduces projects, publications, members, and more.",
      ja: "Comat研究室の公式ウェブサイトで、プロジェクト、論文、メンバーなどを紹介しています。",
    },
    links: [],
    slug: "comatresearch",
    previews: [
      {
        url: "/images/comatresearch/01.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/02.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/03.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/04.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/05.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/06.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/07.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/08.jpg",
        height: 2409,
        width: 1170,
      },
    ],
    tools: ["nextjs", "tailwind", "typescript"],
    comments: [
      {
        comment: {
          en: "This site is now unavailable and no longer maintained.",
          ja: "現在このサイトは公開を終了しており、メンテナンスもしていません。",
        },
        author: "Thanasan Kumdee",
        date: new Date("Aug 10, 2024"),
      },
    ],
  },
  {
    title: {
      en: "Geacher: Find Your Tutor",
      ja: "Geacher：あなたにぴったりの家庭教師を見つけよう",
    },
    body: {
      en: "A platform that connects tutors in various subjects with students' needs.",
      ja: "さまざまな科目の家庭教師と、生徒のニーズをつなぐプラットフォームです。",
    },
    detail: {
      en: "By selecting checkboxes, you can find a tutor. You can also contact them directly from their information page",
      ja: "チェックボックスを選んでいくことで、家庭教師を探せます。情報ページから直接連絡を取ることもできます。",
    },
    links: [
      {
        href: "https://geacher.thnsnkmd.com",
        title: "Visit Website",
      },
      {
        href: "https://github.com/itzmeowww/geacher",
        title: "GitHub",
      },
    ],
    previews: [
      { url: "/images/geacher/2.png", height: 800, width: 1280 },
      { url: "/images/geacher/1.jpg", height: 2296, width: 1080 },
      { url: "/images/geacher/4.jpg", height: 2296, width: 1080 },
      { url: "/images/geacher/5.jpg", height: 2296, width: 1080 },
      { url: "/images/geacher/6.jpg", height: 2296, width: 1080 },
    ],
    slug: "geacher",
    tools: ["nextjs", "tailwind"],

    comments: [
      {
        comment: {
          en: "I learned how to create a static website using Next.js through this project.",
          ja: "このプロジェクトを通じて、Next.jsで静的サイトを作る方法を学びました。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "I used Python to convert data from Google Forms into JSON format and to resize poster images.",
          ja: "Googleフォームのデータをjson形式に変換したり、ポスター画像をリサイズしたりするのにPythonを使いました。",
        },
        author: "Thanasan Kumdee",
      },
      {
        comment: {
          en: "The name was inspired by Geese and Teacher as our highschool, KVIS, has a lot of geese.",
          ja: "「Geacher」という名前は、Goose（ガチョウ）とTeacherから取っています。母校の高校KVISにはガチョウがたくさんいるんです。",
        },
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: {
      en: "Thai Synonym Search Tool",
      ja: "タイ語類義語検索ツール",
    },
    body: {
      en: "An online tool for finding synonyms in Thai language.",
      ja: "タイ語の類義語を検索できるオンラインツールです。",
    },
    links: [
      {
        href: "https://thai-synonym.vercel.app",
        title: "Visit Website",
      },
    ],

    slug: "thai-synonym",
    previews: [
      {
        url: "/images/thai-synonym/00.png",
        width: 2880,
        height: 1640,
      },
      {
        url: "/images/thai-synonym/01.jpg",
        height: 2410,
        width: 1170,
      },
      {
        url: "/images/thai-synonym/02.jpg",
        height: 2410,
        width: 1170,
      },
      {
        url: "/images/thai-synonym/03.jpg",
        height: 2410,
        width: 1170,
      },
    ],

    tools: ["nextjs", "javascript"],
    comments: [],
  },

  {
    title: { en: "Pincassociation", ja: "Pincassociation" },
    body: {
      en: "Pincassociation's art pieces showcase",
      ja: "Pincassociationのアート作品のショーケース",
    },
    links: [
      {
        href: "https://pincassociation.com",
        title: "Visit Website",
      },
    ],

    slug: "pincassociation",
    previews: [
      {
        url: "/images/pincassociation/00.png",
        width: 2880,
        height: 1640,
      },
      {
        url: "/images/pincassociation/01.jpg",
        height: 2396,
        width: 1170,
      },
      {
        url: "/images/pincassociation/02.jpg",
        height: 2420,
        width: 1170,
      },
      {
        url: "/images/pincassociation/03.jpg",
        height: 2401,
        width: 1170,
      },
      {
        url: "/images/pincassociation/04.jpg",
        height: 2389,
        width: 1170,
      },
    ],
    tools: ["nextjs", "tailwind", "typescript"],
    comments: [
      {
        author: "Pinmook (pincassociation)",
        comment: {
          en: "The Pincassociation website is filled with *adorable* and highly interactive features that visitors can enjoy while viewing my artwork. I personally find it enjoyable and delightful to explore.  （-＾▽＾-）",
          ja: "Pincassociationのウェブサイトは、私のアート作品を見ながら楽しめる *愛らしくて* インタラクティブな仕掛けがいっぱい詰まっています。自分自身も巡るたびに楽しい気持ちになります。（-＾▽＾-）",
        },
      },
    ],
  },
  {
    title: { en: "Beyond Tic Tac Toe", ja: "Beyond Tic Tac Toe" },
    body: {
      en: "Even more challenging tic tac toe game, with AI player.",
      ja: "さらに難易度の上がった三目並べ。AIプレイヤー付き。",
    },
    links: [
      {
        href: "https://beyond-tic-tac-toe.vercel.app",
        title: "Play",
      },
      {
        href: "https://github.com/itzmeowww/beyond-tic-tac-toe",
        title: "GitHub",
      },
    ],
    previews: [
      {
        url: "/images/beyond-tic-tac-toe/screenshot_0.png",
        width: 2880,
        height: 1640,
      },
      {
        url: "/images/beyond-tic-tac-toe/screenshot_1.jpeg",
        width: 1170,
        height: 1995,
      },
      {
        url: "/images/beyond-tic-tac-toe/screenshot_2.jpeg",
        width: 1170,
        height: 1970,
      },
      {
        url: "/images/beyond-tic-tac-toe/screenshot_3.jpeg",
        width: 1170,
        height: 1993,
      },
    ],
    slug: "beyond-tic-tac-toe",
    tools: ["nextjs", "tailwind"],
    comments: [
      {
        author: "Thanasan Kumdee",
        comment: {
          en: "There is a problem with API, I will fix that soon. Also, now that I have learned about AI, I will try to implement Q-Learning.",
          ja: "APIに不具合があるので、近いうちに直す予定です。AIについても学んだので、Q学習も実装してみたいと思っています。",
        },
        date: new Date("Aug 10, 2024"),
      },
    ],
  },

  {
    title: { en: "Beta Task Toggler", ja: "Beta Task Toggler" },
    body: {
      en: "A Chrome extension for the competitive programming website beta.programming.in.th.",
      ja: "競技プログラミングサイト beta.programming.in.th 用のChrome拡張機能です。",
    },
    detail: {
      en: "This extension allows users to search problems by status (solved, attempted, unsolved) and filter them by category and also random a problem. It also includes a dark mode feature.",
      ja: "この拡張機能を使うと、問題をステータス（解いた・取り組み中・未着手）で検索したり、カテゴリで絞り込んだり、ランダムに1問選んだりできます。ダークモードにも対応しています。",
    },
    links: [
      {
        href: "https://chrome.google.com/webstore/detail/beta-task-toggler/mgicmhhkcdbopogdbphnecplndijgfbn",
        title: "Chrome Webstore",
      },
      {
        href: "https://github.com/itzmeowww/beta-task-toggler",
        title: "GitHub",
      },
    ],
    previews: [
      {
        url: "/images/beta-task-toggler/preview.png",
        width: 1280,
        height: 800,
      },
      {
        url: "/images/beta-task-toggler/screenshot_1.png",
        width: 1280,
        height: 800,
      },
      {
        url: "/images/beta-task-toggler/screenshot_2.png",
        width: 1280,
        height: 800,
      },
      {
        url: "/images/beta-task-toggler/screenshot_3.png",
        width: 1280,
        height: 800,
      },
      {
        url: "/images/beta-task-toggler/screenshot_4.png",
        width: 1280,
        height: 800,
      },
    ],
    slug: "beta-task-toggler",
    tools: ["bootstrap", "javascript"],
    comments: [
      {
        comment: {
          en: "It makes it easier to scroll and find questions you haven't completed when doing a lot of exercises. I've been using it for half a year now.",
          ja: "問題をたくさん解いていると、まだ解いていない問題を探すのに便利でスクロールも楽になります。もう半年くらい使っています。",
        },
        author: "Nathawat Youngyim (translated)",
        date: new Date("Oct 2, 2022"),
      },
      {
        comment: {
          en: "The website has moved from beta to the official version, including the features from this extension, making it no longer necessary.",
          ja: "サイトがベータ版から正式版に移行し、この拡張機能の機能も取り込まれたため、現在は不要になっています。",
        },
        author: "Thanasan Kumdee",
        date: new Date("Aug 10, 2024"),
      },
      {
        comment: {
          en: "This extension uses classes and text to manage and identify different types of problems.",
          ja: "この拡張機能は、クラスとテキストを使って、さまざまな種類の問題を識別・管理しています。",
        },
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: { en: "Menu Memo ", ja: "Menu Memo " },
    body: {
      en: "A LINE chatbot for telling school's menu at my high school, KVIS.",
      ja: "母校の高校KVISの給食メニューを教えてくれるLINEチャットボットです。",
    },
    detail: {
      en: "It has been used since 2020, until now (2024) with over 800 friends.",
      ja: "2020年から使われていて、2024年現在で友だち登録数は800人を超えています。",
    },
    since: new Date("July, 2020"),

    links: [
      {
        href: "https://github.com/itzmeowww/menu-memo",
        title: "GitHub",
      },
    ],
    previews: [
      {
        url: "/images/menumemo/01.jpeg",
        width: 1170,
        height: 2532,
      },
      {
        url: "/images/menumemo/02.jpeg",
        width: 1170,
        height: 2532,
      },
    ],
    slug: "menu-memo",
    tools: ["javascript"],
    comments: [],
  },
];
