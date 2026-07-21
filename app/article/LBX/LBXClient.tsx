'use client';
import styles from './page.module.css';
import PhotoGallery from '@/app/ui/PhotoGallery';
import SRImage from '@/app/ui/Common/SRImage';
import TOC from '@/app/ui/Common/TOC';
import ArticleNextFooter from '@/app/ui/Common/ArticleNextFooter';
import { resolveMediaUrl } from '@/utils/helper';

export default function LBXClient() {
  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <PhotoGallery album="lbx" onReady={() => {}}></PhotoGallery>
      </div>

      <div className={styles.mainContainer}>
        <TOC />
        <article className={styles.content}>
          <h1>灵白线：在巨石与山脊间寻找自由</h1>

          <section>
            <h2 className="anchor" id="启程：灵岩山的入口">
              启程：灵岩山的入口
            </h2>
            <p>
              在苏州，如果不曾走过一次灵白线，你很难想象在这座温婉的城市背后，还藏着这样一条充满野性与张力的山脊线。灵岩山脚下，是我们这场“登山马拉松”的起点。
            </p>
            <SRImage
              className="w-[85cqw] mx-auto rounded-lg shadow-md my-8 hover:scale-[1.02] transition-transform duration-500"
              photo={{
                id: 1,
                url: '/blog/SuZhou/LinYanShan/IMG_4471.JPG',
                bgPos: 'center',
                position: '苏州-灵岩山',
                title: '入山',
                title2: '通往山野的第一步',
                latlng: '31.258, 120.495',
                description: '',
                tip: '深吸一口山间的湿润空气，城市的喧嚣在身后迅速褪去。'
              }}
            ></SRImage>
            <p>
              两手揣兜的闲适在这里是不存在的，取而代之的是手脚并用的专注。这不仅仅是一条路，它是碎石、枯枝与树影编织成的挑战。每一个台阶，都是在跟地心引力做小小的对抗。
            </p>
          </section>

          <section>
            <h2 className="anchor" id="博弈：与巨石的亲密接触">
              博弈：与巨石的亲密接触
            </h2>
            <p>
              灵白线的精髓在于那些仿佛从地底钻出来的巨石。它们斑驳、坚硬，且毫不修饰。你需要寻找那些被前人踩出的凹槽，借力、跨越，那一刻，肌肉的紧绷感就是最真实的生命刻度。
            </p>
            <div className="flow-root my-8">
              <SRImage
                className="left w-1/2 rounded-lg shadow-sm mr-6 mb-4"
                photo={{
                  id: 2,
                  url: '/blog/SuZhou/LinYanShan/IMG_4472.JPG',
                  bgPos: 'center',
                  position: '灵白线-中段',
                  title: '攀越',
                  title2: '指尖与岩石的摩擦',
                  latlng: '31.265, 120.492',
                  description: '',
                  tip: '在这条路上，每个人都是最纯粹的探险者。'
                }}
              ></SRImage>
              <p>
                汗水顺着额角滑进领口，阳光透过树梢打在灰白色的岩面上。你会注意到那些平时注意不到的小细节：石缝里倔强生出的苔藓，或是被山风吹得东倒西歪却依然坚韧的野草。
              </p>
              <p>
                这种时刻，所有的焦虑都会被那一两公里的陡坡给磨得干干净净。这大概就是户外生活的魔力，它让你没空去想那些有的没的。
              </p>
            </div>
            <SRImage
              className="w-full rounded-lg shadow-md my-8"
              photo={{
                id: 3,
                url: '/blog/SuZhou/LinYanShan/IMG_4473.JPG',
                bgPos: 'center',
                position: '光影山道',
                title: '侧影',
                title2: '山脊上的起伏',
                latlng: '31.260, 120.490',
                description: '',
                tip: '山脊线像一道波浪，载着我们翻过一座又一座山头。'
              }}
            ></SRImage>
          </section>

          <section>
            <h2 className="anchor" id="回望：当日落接管地平线">
              回望：当日落接管地平线
            </h2>
            <p>
              当光线开始变黄、变软，整座山似乎也温柔了下来。站在山脊最高点，看着远处城市的灯火开始接管世界。灵白线的魅力，就在于这种从野性回归日常的过渡。
            </p>
            <div className="flow-root my-8">
              <SRImage
                className="right w-1/3 rounded-lg shadow-sm ml-6 mb-4"
                photo={{
                  id: 4,
                  url: '/blog/SuZhou/LinYanShan/IMG_4474.JPG',
                  bgPos: 'center',
                  position: '山脊暮色',
                  title: '微光',
                  title2: '夕阳下的最后坚持',
                  latlng: '31.270, 120.485',
                  description: '',
                  tip: '天色渐暗，群山的轮廓却愈发清晰。'
                }}
              ></SRImage>
              <p>
                我们在不同的坡度间穿行，脚下的土地有着真实的触感。所有的疲惫在这一刻似乎都找到了合理的归宿。
              </p>
              <p>
                这一方小小的山岭，其实就是现代生活里的一种“紧急出口”。躲进山里，是为了能更好地回到那个吵闹的现实中去。
              </p>
            </div>
            <SRImage
              className="w-full rounded-lg shadow-md my-8"
              photo={{
                id: 5,
                url: '/blog/SuZhou/LinYanShan/IMG_4475.JPG',
                bgPos: 'center',
                position: '白马涧-终点',
                title: '归处',
                title2: '与自我的握手言和',
                latlng: '31.280, 120.480',
                description: '',
                tip: '最好的冒险，结局永远是那个满身汗水却心满意足的自己。'
              }}
            ></SRImage>
          </section>

          <section>
            <h2 className="anchor" id="今天开始我也开始学习剪辑了">
              今天开始我也开始学习剪辑了
            </h2>
            <p>
              以前总觉得视频就是信手一拍的素材，但这次走完灵白线，我突然想尝试着把这些细碎的动态串联起来。虽然手艺还很生疏，分不清节奏，甚至剪出来的画面还有些生涩，但这种一点点打磨、回看的感觉，倒也挺像是在山石间寻找落脚点。
            </p>
            <video
              src={resolveMediaUrl('/blog/SuZhou/LinYanShan/IMG_4476.MOV')}
              controls
              className="w-full rounded-lg shadow-lg my-8"
            />
            <p>
              这是我作为“剪辑新手”的第一份作业。画面里那些山风掠过的声音、鞋底蹭过碎石的沉闷响声，都被我小心翼翼地藏进了进度条里。灵白线，不只是我走过的路，也是我镜头下第一段被重新赋予节奏的故事。
            </p>
          </section>
          <ArticleNextFooter />
        </article>
      </div>
    </div>
  );
}
