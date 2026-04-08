'use client';
import styles from './page.module.css';
import PhotoGallery from '@/app/ui/PhotoGallery';
import SRImage from '@/app/ui/Common/SRImage';
import TOC from '@/app/ui/Common/TOC';
import ArticleNextFooter from '@/app/ui/Common/ArticleNextFooter';

export default function NJClient() {
  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <PhotoGallery album="nj" onReady={() => {}}></PhotoGallery>
      </div>

      <div className={styles.mainContainer}>
        <TOC />
        <article className={styles.content}>
          <h1>莫愁，莫愁</h1>

          <section>
            <h2 className="anchor" id="夜色：新街口的无止尽">
              夜色：新街口的无止尽
            </h2>
            <p>
              南京的夜，是从新街口开始一点点变稠的。站在这儿，你会生出一种错觉：这地方像只永远不睡觉的眼睛，冷眼看着霓虹灯把人潮揉成斑斓的一片，却又默认了每个赶路人的疲惫。
            </p>
            <SRImage
              className="w-[85cqw] mx-auto rounded-lg shadow-md my-8 hover:scale-[1.02] transition-transform duration-500"
              photo={{
                id: 1,
                url: 'https://io.dongzx.lol/blog/NanJing/IMG_3516.jpg',
                bgPos: 'center',
                position: '南京-新街口',
                title: '路口',
                title2: '夜色把霓虹揉进人群',
                latlng: '32.043, 118.783',
                description: '',
                tip: '新街口的路口总有些熟悉的招牌，和不断变换的橱窗。'
              }}
            ></SRImage>
            <p>
              我也喜欢就这么两手一揣，混在人堆里走。最勾动人的是那些零碎的声音：外卖小哥电瓶车的刹车声、情侣躲在橱窗后的低语、还有老头老太太围在台阶上分着刚出炉的包子。这种热闹并不扎眼，反而有种“莫愁，莫愁”的安稳感，像这城给所有过客的一个温柔回声。
            </p>
          </section>

          <section>
            <h2 className="anchor" id="切片：城市相册的旧书">
              切片：城市相册的旧书
            </h2>
            <p>
              人潮从四面八方涌来，又很快散去。每一次在路口驻足，都觉得自己是在翻动一张城市的旧相片，里头叠着上个季节的落叶，也叠着刚买回家的杂货。
            </p>
            <div className="flow-root my-8">
              <SRImage
                className="left w-1/2 rounded-lg shadow-sm mr-6 mb-4"
                photo={{
                  id: 2,
                  url: 'https://io.dongzx.lol/blog/NanJing/IMG_3515.jpg',
                  bgPos: 'center',
                  position: '南京-新街口',
                  title: '巷口',
                  title2: '路灯下的橘色光晕',
                  latlng: '32.044, 118.784',
                  description: '',
                  tip: '外面的世界热闹得像舞台，门外却有一处静默。'
                }}
              ></SRImage>
              <p>
                记得那个下午，天色像块洗旧了的浅色布。我躲在街角一家老书店里，翻着本泛黄的诗集。书店门后的台阶下，一只猫趴在路灯照出来的那一点点橘色光晕里，睡得天塌不惊。
              </p>
              <p>
                那一刻我突然觉得，“莫愁”其实就是给自己开的一剂放心药。不管外头怎么闹腾，只要能找着这么一小块地儿消消停，日子就总还能过下去。
              </p>
            </div>
          </section>

          <section>
            <h2 className="anchor" id="烟火：当龙吟九品亮起灯">
              烟火：当龙吟九品亮起灯
            </h2>
            <p>
              夜再深点儿，新街口的热闹就开始收敛了。愿每一次迷罔，都能在转弯处撞见那束懂你的光。
            </p>
            <div className="flow-root my-8">
              <SRImage
                className="right w-1/3 rounded-lg shadow-sm ml-6 mb-4"
                photo={{
                  id: 3,
                  url: 'https://io.dongzx.lol/blog/NanJing/IMG_3519.jpg',
                  bgPos: 'center',
                  position: '南京-龙吟九品',
                  title: '龙吟九品',
                  title2: '巷弄里的重逢',
                  latlng: '32.040, 118.785',
                  description: '',
                  tip: '空气里飘着淡淡的桂花香，我们聊着各自的近况。'
                }}
              ></SRImage>
              <p>
                那天快到饭点，和朋友约在“龙吟九品”。店藏在挺深的巷弄里，推门进去，木头桌椅、老南京的旧相片，还有空气里那股子散不掉的桂花香，一下子就把人从吵吵闹闹的现实里拽了回来。
              </p>
              <p>
                窗外街灯亮起，偶尔有自行车铃声滑过去。我们也没聊什么大逻辑，就是些日常琐碎。在这儿吃饭，求的不是多惊艳，而是那份安生。
              </p>
            </div>
            <SRImage
              className="w-full rounded-lg shadow-md my-8"
              photo={{
                id: 4,
                url: 'https://io.dongzx.lol/blog/NanJing/IMG_3517.jpg',
                bgPos: 'center',
                position: '南京-日常',
                title: '莫愁的态度',
                title2: '把生活折叠成有温度的模样',
                latlng: '32.035, 118.780',
                description: '',
                tip: '学会与自己握手言和，学会用柔软对待世界。'
              }}
            ></SRImage>
            <p>
              后来我常想，“莫愁”这词儿，其实不是在劝你别担心，而是让你学着对自己、对这世界更软乎点儿。累了就点杯热茶看人来人往，为难了就允许自己慢半拍。
            </p>
            <p>
              新街口教会我的，是在这就快要转不动的快节奏里，依然能把日子折叠成那种有温度的样子。在喧嚣里安放一颗柔软的心，这大概就是南京教给我的、最舒服的活法。
            </p>
          </section>
          <ArticleNextFooter />
        </article>
      </div>
    </div>
  );
}
