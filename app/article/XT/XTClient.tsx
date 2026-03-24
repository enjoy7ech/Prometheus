'use client';

import ModernArticleLayout from '@/app/ui/Layout/ModernArticleLayout';
import SRImage from '@/app/ui/Common/SRImage';
import ArticleNextFooter from '@/app/ui/Common/ArticleNextFooter';

const SLIDES = [
  {
    id: 0,
    name: "等风等你",
    title: "等风等你",
    title2: "风动，心动",
    position: "斜塘-店头",
    tip: "店头的旗帜随风晃动：‘我在等风，也等一个你。’",
    latlng: "31.306, 120.730",
    color: "#4A453C",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4309.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4309.JPG"
  },
  {
    id: 1,
    name: "老街旧门",
    title: "老街旧门",
    title2: "通往明清的回音",
    position: "斜塘-老街",
    tip: "推开一扇沉重的木门，仿佛能听到明清时期的回音。",
    latlng: "31.306, 120.731",
    color: "#383431",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4310.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4310.JPG"
  },
  {
    id: 2,
    name: "眺望未来",
    title: "眺望未来",
    title2: "古今同框",
    position: "斜塘-远眺",
    tip: "远与近，古与今",
    latlng: "31.307, 120.732",
    color: "#2F2E2C",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4311.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4311.JPG"
  },
  {
    id: 3,
    name: "鸭城",
    title: "鸭城",
    title2: "鸭城春深",
    position: "斜塘-屋顶",
    tip: "传统建筑层叠出的韵律感，像是一首沉寂的古诗。",
    latlng: "31.307, 120.731",
    color: "#423B34",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4312.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4312.JPG"
  },
  {
    id: 4,
    name: "宜幽亭",
    title: "宜幽亭",
    title2: "苏式极简主义",
    position: "斜塘-宜幽亭",
    tip: "苏式美学的精髓在于“克制”。宜幽亭的构图极其严谨，所有的线条都指向了一种极致的宁静。",
    latlng: "31.305, 120.730",
    color: "#35312C",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4313.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4313.JPG"
  },
  {
    id: 5,
    name: "街角一隅",
    title: "街角花开",
    title2: "",
    position: "斜塘-街角",
    tip: "这是什么花",
    latlng: "31.306, 120.728",
    color: "#31352A",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4314.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4314.JPG"
  },
  {
    id: 6,
    name: "思齐",
    title: "思齐古意",
    title2: "",
    position: "斜塘-思齐",
    tip: "见贤思齐焉，见不贤er内自省也。",
    latlng: "31.308, 120.727",
    color: "#3A3E40",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4315.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4315.JPG"
  },
  {
    id: 7,
    name: "斜塘老街",
    title: "斜塘老街",
    title2: "初见斜塘",
    position: "斜塘-牌坊",
    tip: "这张牌坊是对该地的致敬。它是这片区域的灵魂支柱。",
    latlng: "31.305, 120.729",
    color: "#2B2E33",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4316.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4316.JPG"
  },
  {
    id: 8,
    name: "越来越好",
    title: "越来越好",
    title2: "平淡的真理",
    position: "斜塘-墙壁",
    tip: "没什么好说的，越来越好！一些关于生活的朴素愿望。",
    latlng: "31.304, 120.731",
    color: "#2C2D2B",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4317.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4317.JPG"
  },
  {
    id: 9,
    name: "画中旖旎",
    title: "画中旖旎",
    title2: "入画三分",
    position: "斜塘-写生",
    tip: "写生的老人在画画，我亦在画中。这种重叠的叙事是我拍摄时最喜欢的瞬间。",
    latlng: "31.306, 120.732",
    color: "#463A2F",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4320.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4320.JPG"
  },
  {
    id: 10,
    name: "池杉红叶",
    title: "池杉红叶",
    title2: "打翻的调色盘",
    position: "斜塘-池杉",
    tip: "大片的落羽杉染红了半边天，如梦似幻。这种红不是鲜艳，而是一种沉稳的、带有泥土气息的深邃。",
    latlng: "31.307, 120.734",
    color: "#663322",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4321.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4321.JPG"
  },
  {
    id: 11,
    name: "微光斜照",
    title: "微光斜照",
    title2: "",
    position: "斜塘-林间",
    tip: "阳光穿透红叶，落了一地的碎金，时间在这里按下了暂停键。",
    latlng: "",
    color: "#554422",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4322.jpg",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4322.jpg"
  },
  {
    id: 12,
    name: "定格瞬间",
    title: "定格瞬间",
    title2: "最后的一抹暖意",
    position: "斜塘-午后",
    tip: "在层林尽染的余韵里，记录下这美好的午后剪影。",
    latlng: "31.306, 120.735",
    color: "#4A4D32",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4327.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4327.JPG"
  },
  {
    id: 13,
    name: "落叶地毯",
    title: "落叶地毯",
    title2: "嘎吱作响的诗篇",
    position: "斜塘-地面",
    tip: "踩在厚厚的落羽杉针叶上，发出嘎吱嘎吱的声响，那是自然的声音。我特意放低了机位。",
    latlng: "31.308, 120.733",
    color: "#5C3D2E",
    bgPos: 'center',
    description: '',
    url: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4330.JPG",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4330.JPG"
  }
];

export default function XTClient() {
  return (
    <ModernArticleLayout
      slides={SLIDES}
      articleName="斜塘"
      photoLocation="苏州·斜塘老街"
      title="斜塘：重拾旧时的街道记忆"
      heroDescription={
        <>
          AN URBAN EXPLORATION<br />IN SUZHOU INDUSTRIAL PARK<br />XIE TANG OLD STREET
        </>
      }
      heroLocation="2026.03.21"
    >
      <section>
        <h2 className="anchor" id="序言：重逢在风起时">序言：重逢在风起时</h2>
        <p>
          在苏州工业园区那极具未来感的玻璃幕墙丛林里，斜塘老街像是一个温存的秘密。即便城市再快，总有些地方愿意替你记得那些慢下来的时光。
        </p>
        <div className="flow-root my-10">
          <SRImage
            className="left w-1/2 rounded-xl shadow-lg mr-8 mb-6"
            photo={SLIDES[0]}
          />
          <p>
            刚踏入街道，我就被这面随风晃动的旗帜勾住了目光。‘我在等风，也等一个你。’ 这种略显矫情却又极度切合江南氛围的表白，是我开启这趟拍摄的理由。我不确定风何时会来，但在这个光影交错的午后，能遇见这种纯粹的意境，已是最好的开场。
          </p>
          <p>
            这里的魅力不在于什么宏大的叙事，而在于这些不经意间流露的柔情。它让步履匆匆的摄影师也忍不住驻足，调整焦距，捕捉那一丝轻盈的动态。
          </p>
        </div>
      </section>

      <section>
        <h2 className="anchor" id="光影：古桥与旧梦">光影：古桥与旧梦</h2>
        <p>
          穿行在巷弄间，你会发现那些被岁月打磨得发亮的石板路和厚重的木门。这里的“旧”，不是陈腐，而是一种有温度的留白。
        </p>
        <SRImage
          className="w-full rounded-2xl shadow-xl my-10 hover:scale-[1.01] transition-transform duration-700"
          photo={SLIDES[1]}
        />
        <p>
          这张照片拍摄于一处偏僻的转角。推开这扇沉重的木门时，门轴发出的吱呀声清澈得惊人。我希望通过这张大景别捕捉到那种深邃的时间感——仿佛门后藏着的，是一段尚未被现代文明惊扰的旧梦。
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 my-12 items-start">
          <div className="flex-1">
            <SRImage
              className="w-full rounded-lg shadow-md"
              photo={SLIDES[2]}
            />
            <p className="mt-4 text-sm text-gray-500 italic">远处是园区的摩天大楼，近处是老街的飞檐翘角。</p>
          </div>
          <div className="flex-1">
            <SRImage
              className="w-full rounded-lg shadow-md"
              photo={SLIDES[3]}
            />
            <p className="mt-4 text-sm text-gray-500 italic">传统建筑层叠出的韵律感，像是一首沉寂的古诗。</p>
          </div>
        </div>
        <p>
          之所以选择这两个角度，是因为我想表现“斜塘”在现代城市中的独特位格。它是新与旧的交接点，是快与慢的缓冲区。当你站在河堤上眺望，那种撕裂感与融合感并存的冲击力，正是拍摄的绝佳题材。
        </p>

        <div className="flow-root my-10">
          <SRImage
            className="right w-2/5 rounded-xl shadow-lg ml-8 mb-6"
            photo={SLIDES[4]}
          />
          <p>
            苏式美学的精髓在于“克制”。宜幽亭的构图极其严谨，所有的线条都指向了一种极致的宁静。拍摄时我特意选择了侧光，让建筑的轮廓在明暗对比中显得更加坚毅。在这里，你不需要多余的修饰，光影本身就是最好的雕刻师。
          </p>
          <p>
            无论是亭台错落，还是街角偶然瞥见的一抹亮色，都在不断印证着苏州人对生活品质那种深入骨髓的执着。
          </p>
        </div>

        <div className="flex gap-4 my-8">
            <SRImage
                className="flex-1 rounded-lg"
                photo={SLIDES[5]}
            />
            <SRImage
                className="flex-1 rounded-lg"
                photo={SLIDES[6]}
            />
        </div>
      </section>

      <section>
        <h2 className="anchor" id="市井：在这里，看风景的人亦是风景">市井：在这里，看风景的人亦是风景</h2>
        <p>
          斜塘老街不仅是建筑的陈列馆，更是真实生活的延续。
        </p>
        <SRImage
          className="w-full rounded-2xl shadow-xl my-10"
          photo={SLIDES[7]}
        />
        <p>
          这张牌坊是对该地的致敬。它是这片区域的灵魂支柱。我记录下它，是为了在一个更宏大的视角里确立坐标。而在它不远处，那些平实的愿景（‘越来越好’）则为这张纪行增添了一份温暖的人文底色。
        </p>

        <div className="flow-root my-10">
          <SRImage
            className="left w-1/2 rounded-xl shadow-lg mr-8 mb-6"
            photo={SLIDES[9]}
          />
          <SRImage
            className="right w-1/3 rounded-xl shadow-lg ml-8 mb-6 translate-y-12"
            photo={SLIDES[8]}
          />
          <p>
            最令我感动的是那位在河边写生的老人。他在画画，而我在看风景的路上，将他也变成了风景。这种重叠的叙事是我拍摄时最喜欢的瞬间。我们都在用不同的方式记录着斜塘，他在画布上，我在底片里。这大概就是斜塘这种老街存在的意义——给每个热爱生活的人，提供一份触手可及的创作灵感。
          </p>
        </div>
      </section>

      <section>
        <h2 className="anchor" id="深秋：被池杉点燃的终章">深秋：被池杉点燃的终章</h2>
        <p>
          如果说前面的篇章是灰调的记忆，那么这一章节则是绚烂的梦. 当深秋降临，斜塘的池杉和落羽杉便开始了一场疯狂的色彩试验。
        </p>
        <SRImage
          className="w-full rounded-3xl shadow-2xl my-12"
          photo={SLIDES[10]}
        />
        <p>
          这满眼火红的颜色，直接将冬日的清冷驱散殆尽。拍摄池杉红叶时，我使用了长焦镜头，试图剥离多余的杂质，只留下这种如梦似幻的色块。这种红不是鲜艳，而是一种沉稳的、带有泥土气息的深邃。
        </p>
        
        <div className="flow-root my-12">
            <SRImage
                className="right w-1/2 rounded-xl shadow-lg ml-8 mb-4 hover:scale-[1.05] transition-all"
                photo={SLIDES[11]}
            />
            <p>
                捕捉这一刻光影是需要运气的。阳光恰好穿透红叶，落了一地的碎金。那一刻，你仿佛能看到时间在这些金色颗粒中缓缓流淌。我屏住呼吸按下快门，生怕稍微一点声响，就会打破这脆弱的静谧。
            </p>
        </div>

        <SRImage
          className="w-[85cqw] mx-auto rounded-xl shadow-lg my-12"
          photo={SLIDES[12]}
        />
        <p>
          直到走到密林深处，满地都是厚厚的针叶。
        </p>

        <div className="flow-root my-10">
          <SRImage
            className="left w-1/3 rounded-xl shadow-md mr-8 mb-6"
            photo={SLIDES[13]}
          />
          <p>
            我特意放低了机位，想要拍下这双脚即将触碰地面的瞬间。踩在落叶地毯上的感觉，不仅仅是触觉上的松软，更是听觉上的享受——那种嘎吱嘎吱的声响，是自然的声音。
          </p>
          <p>
            这最后一张照片，是我这趟旅程的终点，也是我想留给每个读者的感官体验。有些美，是需要你亲自走进去，用耳朵和脚尖去感知的。
          </p>
        </div>
      </section>

      <section>
        <h2 className="anchor" id="结语：期待再次等风来">结语：期待再次等风来</h2>
        <p>
          斜塘老街，不仅是一个地理坐标，更是一种心理慰藉。在这一次次的快门声中，我不仅带走了这些照片，更带走了一份难得的笃定。
        </p>
        <p>
          不管世界如何变迁，只要这片红叶还在，这扇木门还能被推开，我们就总有一个地方，可以回来，等风来，也等那个更好的自己。
        </p>
      </section>

      <ArticleNextFooter />
    </ModernArticleLayout>
  );
}
