import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/publication.module.css"
import { Chip, Divider } from "@material-ui/core"

const PortfolioPage = () => {
  const handleOnclick = () => {
    // bg_audio_instance.play()
  }
  return (
    <Layout>
      <Seo title="Portfolio" />

      <h1 onLoad={handleOnclick()}>Portfolio</h1>
      <h2>Music</h2>
      <div>
        <div>
          <papertitle>Music Improvisations and Medleys</papertitle>
          <br />I love playing randomly on piano in my leisure time. My music
          creations are posted on SoundCloud and Instagram. I have a playlist on
          my <Link to="/about">About</Link> page!
          <br />
          {/* <em>Present at National Taiwan University Art Festival</em> */}
          {/* <br /> */}
          {/* <p>We built hardware on dancers with led lights and software control system to play background music which is synchronized with the dancer's movement. (I was responsible for the software control and internet socket communication.)</p> */}
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="SoundCloud"
              component="a"
              href="https://soundcloud.com/atosystem/cravingforspringwind?in=atosystem/sets/piano-remix-by-cornerhipster"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="Instagram"
              component="a"
              href="https://www.instagram.com/cornerhipster"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
          <p></p>
        </div>
      </div>
      <Divider></Divider>
      <h2>Technology</h2>
      <div>
        <div>
          <papertitle>Sensor your music</papertitle>
          <br />
          Collaborate with my peers
          <br />
          <em>Course project</em>
          <br />
          <p>
            I designed an interface to control PureData by smartphones via web
            browser
          </p>
          {/* <br /> */}
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="code"
              component="a"
              href="https://github.com/atosystem/sensor_your_music"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="blog"
              component="a"
              href="https://atosystem.github.io/blogs/sensor-puredata"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
        </div>
        <div>
          <papertitle>MusicChain</papertitle>
          <br />
          Collaborate with my peers
          <br />
          <em>Course project, recieved cooperation invitation from startup</em>
          <p>
            I developed a profit-sharing system on blockchain that share profits
            among cover and original composers.
          </p>
          {/* <br /> */}
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="code"
              component="a"
              href="https://github.com/atosystem/MusicChain"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="blog"
              component="a"
              href="/blogs/music-chain"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
        </div>
        <div>
          <papertitle>NTUEE LightDance</papertitle>
          <br />
          Collaborate with my peers
          <br />
          <em>Presented at National Taiwan University Art Festival</em>
          {/* <br /> */}
          <p>
            We built hardware on dancers with led lights and software control
            system to play background music which is synchronized with the
            dancer's movement. (I was responsible for the software control and
            internet socket communication.)
          </p>
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="code"
              component="a"
              href="https://github.com/NTUEELightDance/2020-LightDance-All"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="youtube"
              component="a"
              href="https://www.youtube.com/watch?v=iHg-aeB9Jpo"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
          <p></p>
        </div>
        <div>
          <papertitle>NTUEE Automatic Theremonitor System</papertitle>
          <br />
          Collaborate with my peers
          <br />
          <em>
            Used on NTU Campus for tracking COVID-19 traces, awarded the Social
            Devotion Special Award{" "}
          </em>
          <p>I am responsible for software programming on Ardunio</p>
          {/* <br /> */}
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="code"
              component="a"
              href="https://github.com/TobyChen0106/Automatic-Forehead-Thermometer"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
        </div>
      </div>
      <Divider></Divider>
      <h2>Research</h2>
      <div>
        <div>
          <papertitle>
            M-SpeechCLIP: Leveraging Large-Scale, Pre-Trained Models for
            Multilingual Speech to Image Retrieval
          </papertitle>
          <br />
          Layne Berry, <strong>Yi-Jen Shih</strong>, Hsuan-Fu Wang, Heng-Jui
          Chang, Hung-yi Lee, David Harwath
          <br />
          <em>Under Review ICASSP</em>
          <br />
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="arXiv"
              component="a"
              href="https://arxiv.org/abs/2211.01180"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
          <p></p>
        </div>
        <div>
          <papertitle>
            SpeechCLIP: Integrating Speech with Pre-Trained Vision and Language
            Model
          </papertitle>
          <br />
          <strong>Yi-Jen Shih</strong>, Hsuan-Fu Wang, Heng-Jui Chang, Layne
          Berry, Hung-yi Lee, David Harwath
          <br />
          <em>IEEE Spoken Language Technology Workshop (SLT) 2022</em>
          <br />
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="arXiv"
              component="a"
              href="https://arxiv.org/abs/2210.00705"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="code"
              component="a"
              href="https://github.com/atosystem/SpeechCLIP"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="blog"
              component="a"
              href="/blogs/speechclip"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="poster"
              component="a"
              href="/publications_files/speechclip/SpeechCLIP_slt_poster_v2.pdf"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="present@JSALT'22"
              component="a"
              href="https://www.youtube.com/watch?v=_GbZRM18NxQ&t=2118s"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
          <p></p>
        </div>
        <div>
          <papertitle>
            Theme Transformer: Symbolic Music Generation with Theme-Conditioned
            Transformer
          </papertitle>
          <br />
          <strong>Yi-Jen Shih</strong>, Shih-Lun Wu, Frank Zalkow, Meinard
          Müller, Yi-Hsuan Yang
          <br />
          <em>IEEE Transactions on Multimedia (TMM) 2022</em>
          <br />
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="arXiv"
              component="a"
              href="https://arxiv.org/abs/2111.04093"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="code"
              component="a"
              href="https://github.com/atosystem/ThemeTransformer"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="demo"
              component="a"
              href="https://atosystem.github.io/ThemeTransformer/#demo"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="blog"
              component="a"
              href="/blogs/theme-transformer"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="talk@MILA"
              component="a"
              href="https://www.youtube.com/watch?v=U2T_1HH0yH0"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
          <p></p>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
