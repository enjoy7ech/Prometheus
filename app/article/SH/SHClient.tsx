'use client';

import ModernArticleLayout from '@/app/ui/Layout/ModernArticleLayout';
import SRImage from '@/app/ui/Common/SRImage';
import ArticleNextFooter from '@/app/ui/Common/ArticleNextFooter';
import { resolveMediaUrl } from '@/utils/helper';

const SLIDES = [
  {
    id: 0,
    name: "石湖晨光",
    title: "石湖晨光",
    title2: "湖面如镜",
    position: "苏州-石湖",
    tip: "早起的阳光温柔地洒在湖面上，仿佛万物都在这一刻苏醒。",
    latlng: "31.252, 120.575",
    color: "#4A5255",
    bgPos: 'center',
    description: '',
    url: "/blog/SuZhou/ShiHu/IMG_4987.JPG",
    image: "/blog/SuZhou/ShiHu/IMG_4987.JPG"
  },
  {
    id: 1,
    name: "越堤长影",
    title: "越堤长影",
    title2: "跨越时间的脚步",
    position: "石湖-越堤",
    tip: "走在长长的堤岸上，两侧是湖水，眼前是远山。",
    latlng: "31.253, 120.576",
    color: "#384145",
    bgPos: 'center',
    description: '',
    url: "/blog/SuZhou/ShiHu/IMG_4988.JPG",
    image: "/blog/SuZhou/ShiHu/IMG_4988.JPG"
  },
  {
    id: 2,
    name: "波光碎影",
    title: "波光碎影",
    title2: "光与水的博弈",
    position: "石湖-湖面",
    tip: "每一片涟漪都承载着一段关于苏州的故事。",
    latlng: "31.251, 120.574",
    color: "#2F3539",
    bgPos: 'center',
    description: '',
    url: "/blog/SuZhou/ShiHu/IMG_4989.JPG",
    image: "/blog/SuZhou/ShiHu/IMG_4989.JPG"
  },
  {
    id: 3,
    name: "古桥遗韵",
    title: "古桥遗韵",
    title2: "垂柳下的呢喃",
    position: "石湖-古桥",
    tip: "桥头的风，总是带着点湿润的草木清香。",
    latlng: "31.254, 120.578",
    color: "#424A3E",
    bgPos: 'center',
    description: '',
    url: "/blog/SuZhou/ShiHu/IMG_4991.JPG",
    image: "/blog/SuZhou/ShiHu/IMG_4991.JPG"
  },
  {
    id: 4,
    name: "湖心小亭",
    title: "湖心小亭",
    title2: "静谧的注视",
    position: "石湖-小亭",
    tip: "在这方寸之地，感受天地的广阔。",
    latlng: "31.252, 120.573",
    color: "#353B3C",
    bgPos: 'center',
    description: '',
    url: "/blog/SuZhou/ShiHu/IMG_4992.JPG",
    image: "/blog/SuZhou/ShiHu/IMG_4992.JPG"
  },
  {
    id: 5,
    name: "垂钓者",
    title: "垂钓者",
    title2: "时间的重量",
    position: "石湖-湖边",
    tip: "生活不在于终点，而在于这静静等待的一刻。",
    latlng: "31.256, 120.579",
    color: "#31382F",
    bgPos: 'center',
    description: '',
    url: "/blog/SuZhou/ShiHu/IMG_4993.JPG",
    image: "/blog/SuZhou/ShiHu/IMG_4993.JPG"
  },
  {
    id: 6,
    name: "晚霞初现",
    title: "晚霞初现",
    title2: "天空的调色盘",
    position: "石湖-天空",
    tip: "夕阳即将沉入地平线之前，最后一次绽放它的华彩。",
    latlng: "31.255, 120.580",
    color: "#3A3E40",
    bgPos: 'center',
    description: '',
    url: "/blog/SuZhou/ShiHu/IMG_4994.JPG",
    image: "/blog/SuZhou/ShiHu/IMG_4994.JPG"
  },
  {
    id: 7,
    name: "石湖印象",
    title: "石湖印象",
    title2: "归途的轮廓",
    position: "石湖-远景",
    tip: "湖光山色，尽在这一瞬的快门间。",
    latlng: "31.251, 120.572",
    color: "#2B2E33",
    bgPos: 'center',
    description: '',
    url: "/blog/SuZhou/ShiHu/IMG_4995.JPG",
    image: "/blog/SuZhou/ShiHu/IMG_4995.JPG"
  }
];

export default function SHClient() {
  return (
    <ModernArticleLayout
      slides={SLIDES}
      articleName="石湖"
      photoLocation="苏州·石湖风景区"
      title="石湖：越堤之上的湖光山色"
      heroDescription={
        <>
          A PEACEFUL RETREAT<br />BETWEEN THE CITY AND THE LAKE<br />SHI HU SCENIC AREA
        </>
      }
      heroLocation="2026.03.24"
    >
      <section>
        <h2 className="anchor" id="序言：当城市有了呼吸">序言：当城市有了呼吸</h2>
        <p>
          石湖，位于苏州城西南，相传是范蠡带着西施隐入烟波之处。对于现代苏州人而言，这里是避开平江路嘈杂人潮、真正能听见风声的地方。
        </p>
        <div className="flow-root my-10">
          <SRImage
            className="left w-1/2 rounded-xl shadow-lg mr-8 mb-6"
            photo={SLIDES[0]}
          />
          <p>
            晨雾还未完全散去时，石湖有着一种近乎神圣的平静。光线从东方的云缝里挤出来，一点点点亮湖面。这种时刻，连按快门的声音都显得有些唐突。
          </p>
          <p>
            我喜欢在这样的清晨出发，越过那道连接着过去与现在的堤岸。这不仅仅是一次散步，这是一场与自我的深度对话。
          </p>
        </div>
      </section>

      <section>
        <h2 className="anchor" id="步履：在越堤间穿行">步履：在越堤间穿行</h2>
        <p>
          漫步在石湖的堤岸上，你会发现这里的节奏与别处不同。没有匆忙的赶路人，只有悠闲的步履。
        </p>
        <SRImage
          className="w-full rounded-2xl shadow-xl my-10 hover:scale-[1.01] transition-transform duration-700"
          photo={SLIDES[1]}
        />
        <p>
          这条长长的堤岸是拍摄线条美感的绝佳地点。它像是一道脊梁，将石湖分为了不同的情绪区域。左手是波光粼粼的开阔湖面，右手是掩映在垂柳后的江南民居。
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 my-12 items-start">
          <div className="flex-1">
            <SRImage
              className="w-full rounded-lg shadow-md"
              photo={SLIDES[2]}
            />
            <p className="mt-4 text-sm text-gray-500 italic">细密的波纹，在午后的阳光下闪烁着金属般的光泽。</p>
          </div>
          <div className="flex-1">
            <SRImage
              className="w-full rounded-lg shadow-md"
              photo={SLIDES[3]}
            />
            <p className="mt-4 text-sm text-gray-500 italic">古桥的倒影，述说着那些被时间遗忘的岁月。</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="anchor" id="静谧：湖心深处的守望">静谧：湖心深处的守望</h2>
        <p>
          走到湖心深处，在一座小亭里小憩，是这份纪行中最为放松的时刻。
        </p>
        <div className="flow-root my-10">
          <SRImage
            className="right w-2/5 rounded-xl shadow-lg ml-8 mb-6"
            photo={SLIDES[4]}
          />
          <p>
            在这里，所有的杂音都会消失。你只能听到远处若有若无的鸟鸣，以及湖水轻轻拍打岸边的频率。这种孤独并不冷清，反而充满了充盈的力量感。
          </p>
          <p>
            不远处，总能见到几位老苏州在岸边静坐垂钓。他们的专注似乎与时间无关。在他们眼里，钓起来的未必是鱼，或许是这一整下午的清闲。
          </p>
        </div>
        <div className="flex gap-4 my-8">
            <SRImage
                className="flex-1 rounded-lg"
                photo={SLIDES[5]}
            />
        </div>
      </section>

      <section>
        <h2 className="anchor" id="流光：动态的石湖印记">流光：动态的石湖印记</h2>
        <p>
          单帧的图片往往难以捕捉石湖那种流动的韵律。于是我尝试记录下这段影像。风吹过湖面带动的不仅是水波，还有那不可名状的江南古意。
        </p>
        <video
          src={resolveMediaUrl('/blog/SuZhou/ShiHu/copy_D38BC213-BB77-458B-BC2C-BC4F82CABD3D.MOV')}
          controls
          className="w-full rounded-xl shadow-2xl my-10"
        />
        <p>
          在这段短片里，我试图还原那种“人在画中走”的感觉。越堤、烟柳、塔影，所有的元素都在镜头下有了自己的呼吸节奏。
        </p>
      </section>

      <section>
        <h2 className="anchor" id="终章：当日落潜入湖底">终章：当日落潜入湖底</h2>
        <p>
          当日落的时分来临，整座石湖变成了一块巨大的调色板。
        </p>
        <div className="flow-root my-10">
          <SRImage
            className="left w-1/2 rounded-xl shadow-lg mr-8 mb-6"
            photo={SLIDES[6]}
          />
          <p>
            晚霞给原本清淡的景致涂上了一层厚重的色彩。这种壮丽转瞬即逝，却足以让人在接下来的漫长夜里不断回味。
          </p>
          <p>
            最后一张快门给了这幅远景。此时的石湖，已经完全做好了准备，要在月光下书写另一章节的宁静。我收起三脚架，带走了这一天的湖光山色。
          </p>
        </div>
        <SRImage
          className="w-full rounded-2xl shadow-xl my-10"
          photo={SLIDES[7]}
        />
      </section>

      <section>
        <h2 className="anchor" id="结语：生活在湖畔">结语：生活在湖畔</h2>
        <p>
          石湖，是一个适合发呆的地方。在这一次次的记录中，我发现所谓的“风景”，本质上其实是我们内心的倒影。只要心是静的，无论在斜塘还是在石湖，都能遇见那个最好的季节。
        </p>
      </section>

      <ArticleNextFooter />
    </ModernArticleLayout>
  );
}
