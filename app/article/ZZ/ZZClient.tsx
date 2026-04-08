'use client';
import styles from './page.module.css';
import PhotoGallery from '@/app/ui/PhotoGallery';
import SRImage from '@/app/ui/Common/SRImage';
import TOC from '@/app/ui/Common/TOC';
import ArticleNextFooter from '@/app/ui/Common/ArticleNextFooter';

export default function ZZClient() {
  const baseUrl = 'https://io.dongzx.lol/blog/SuZhou/ZhouZhuang/';

  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <PhotoGallery album="zz" onReady={() => { }}></PhotoGallery>
      </div>

      <div className={styles.mainContainer}>
        <TOC />
        <article className={styles.content}>
          <h2 className="anchor" id="午后初见">
            午后：光影里的旧梦
          </h2>
          <section>
            <p>
              抵达周庄时，正是午后最温柔的时刻。阳光并不刺眼，而是带着一种经过岁月过滤后的温润，斜斜地铺在黛瓦青砖之上。
            </p>
            <p>
              作为“中国第一水镇”，周庄不仅仅是一个地理坐标，更是一种寄托在流水与石桥间的文化意向。走进这里，空气中似乎都弥漫着一种潮湿而古老的木头香气。
            </p>
          </section>

          <h2 className="anchor" id="石桥与柳">
            石桥：跨越百年的回望
          </h2>
          <section>
            <p>
              周庄的灵魂，一大半都系在那些古老的石桥上。看那座标志性的圆拱桥，挺拔的弧度划破了绿水的宁静。桥头垂柳依依，柳丝细长如发，轻轻掠过过往游人的肩头。
            </p>
            <SRImage
              className="w-[90cqw] mx-auto rounded-lg shadow-xl my-10"
              photo={{
                id: 1,
                url: `${baseUrl}IMG_5143.JPG`,
                bgPos: 'center',
                position: '',
                title: '古桥石影',
                title2: '',
                latlng: '',
                description: '柳浪闻莺，石桥跨古今',
                tip: '最经典的周庄构图'
              }}
            />
            <p>
              站在桥顶远眺，两岸建筑错落有致，白墙已有些许斑驳，却更显出一种“洗尽铅华”后的厚重。
            </p>
          </section>

          <h2 className="anchor" id="水上节奏">
            摇橹：指尖划出的涟漪
          </h2>
          <section>
            <p>
              在周庄，如果不坐一次摇橹船，那便错过了它最灵动的节奏。午后的河道并不拥挤，几只装饰着莲花灯饰的游船在柳荫下缓缓行过。
            </p>
            <p>
              远远望去，那些游船像是漂浮在水墨画里的红莲，随着波纹微微起伏。在这里，时间不是按照分钟计算的，而是按照船桨拨动水面的次数——每一次划动，都带着古镇特有的慵懒与安详。
            </p>
            <div className="flex flex-col md:flex-row gap-6 my-10 items-start">
              <div className="flex-1">
                <SRImage
                  className="w-full rounded-lg shadow-xl"
                  photo={{
                    id: 1,
                    url: `${baseUrl}IMG_1200.JPG`,
                    bgPos: 'center',
                    position: '',
                    title: '莲灯游船',
                    title2: '',
                    latlng: '',
                    description: '',
                    tip: '哪怕在午后，灯饰依然点缀着梦境'
                  }}
                />
              </div>
              <div className="flex-1">
                <SRImage
                  className="w-full rounded-lg shadow-xl"
                  photo={{
                    id: 1,
                    url: `${baseUrl}IMG_1198.JPG`,
                    bgPos: 'center',
                    position: '',
                    title: '红笼高挂',
                    title2: '',
                    latlng: '',
                    description: '',
                    tip: '午后的红，是岁月里最鲜活的底色'
                  }}
                />
              </div>
            </div>
            <p className="my-12 text-center text-gray-500 font-light italic">
              “水巷里的光影，会在某一瞬间让你分不清哪是现实，哪是旧梦。”
            </p>
            <p>
              随着船夫有节奏的摇橹声，水面上泛起层层涟漪。那种声音清脆而有节奏，像是敲击在岁月上的鼓点。两岸的倒影被揉碎再重组，白墙、黑瓦、绿柳，都在这一圈圈的波纹中变得朦胧起来。
            </p>
            <p>
              最引人注目的莫过于那些挂在屋檐下的红灯笼。即便在日光下尚未点亮，它们依然用那一抹炽热的鲜红，点缀着这里的黛青色基调。微风拂过，灯笼轻轻晃动，仿佛在低声预示着古镇即将到来的、更加迷人的黄昏。
            </p>
            <video
                className="block mx-auto max-h-[60vh] w-full rounded-lg shadow-2xl my-10"
                controls
                playsInline
                src={`${baseUrl}copy_AE4607F6-04AC-46E8-A433-B543E1CDF0D6.MOV`}
            ></video>
          </section>

          <h2 className="anchor" id="文艺墙">
            寄托：我在周庄很想你
          </h2>
          <section>
            <p>
              古镇并不只有陈旧的味道，在那些不起眼的转角，总能邂逅一些现代的诗意。
            </p>
            <div className="flex flex-col md:flex-row gap-8 my-10 items-center">
              <SRImage
                className="flex-[1.2] rounded-lg shadow-lg"
                photo={{
                  id: 1,
                  url: `${baseUrl}IMG_5141.JPG`,
                  bgPos: 'center',
                  position: '',
                  title: '情怀路牌',
                  title2: '',
                  latlng: '',
                  description: '天青色等烟雨，周庄在等你',
                  tip: '文艺气息拉满'
                }}
              />
              <div className="flex-1 text-sm md:text-base">
                <p className="italic text-gray-600 border-l-4 border-gray-300 pl-4 mb-4">
                  “天青色等烟雨，而我在等你。”
                </p>
                <p>
                  那面醒目的蓝色路牌，让每个路过的行人都忍不住停下脚步。这或许就是周庄的魅力——它既能接纳百年的风霜，也能温柔地容纳现代人的思念与眷恋。
                </p>
              </div>
            </div>
          </section>

          <h2 className="anchor" id="岁月留痕">
            细节：檐下的宁静
          </h2>
          <section>
            <p>
              我更喜欢观察那些微小的细节。比如斑驳白墙上挂着的斗笠，或者是那扇紧闭的陈旧木窗。它们静默无声，却比任何文字都能讲述在那漫长岁月里的生活点滴。
            </p>
            <SRImage
              className="w-full md:w-[70cqw] mx-auto rounded-lg shadow-md my-8"
              photo={{
                id: 1,
                url: `${baseUrl}IMG_5142.JPG`,
                bgPos: 'center',
                position: '',
                title: '岁月留痕',
                title2: '',
                latlng: '',
                description: '',
                tip: '每一个转角都是一首诗'
              }}
            />
          </section>

          <h2 className="anchor" id="结语">
            再见，梦里江南
          </h2>
          <section>
            <p>
              午后的时光流逝得极慢，慢到让人忘记了喧嚣的城市。周庄不仅仅是一个旅游目的地，它是每个人心中那个关于江南的旧梦。
            </p>
            <p>
              当夕阳的余辉逐渐隐没，回头再看一眼那些石桥与轻舟，心中的那份安宁便是这次旅行最好的收获。无论走多远，这里始终是那个让人心安的“世外桃源”。
            </p>
          </section>
          <ArticleNextFooter />
        </article>
      </div>
    </div>
  );
}
