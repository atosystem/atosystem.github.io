import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/about.module.css"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      bg_music: file(
        sourceInstanceName: { eq: "music" }
        name: { eq: "intro_bgm" }
      ) {
        publicURL
      }
      img_social_devotion_award: file(
        relativePath: { eq: "social_devotion_award.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // console.log(data)
  // const bg_music_url = data.bg_music.publicURL
  // const bg_audio_instance = new Audio(bg_music_url)
  // bg_audio_instance.volume = 1

  // useEffect(()=>{
  //   bg_audio_instance.play()
  // },[])

  // bg_audio_instance.addEventListener('ended', function () {
  //   bg_audio_instance.play()
  // }, false);

  // componentDidMount() {
  //   bg_audio_instance.play()
  // }
  const handleOnclick = () => {
    // bg_audio_instance.play()
  }
  return (
    <Layout>
      <Seo title="About" />

      <h1 onLoad={handleOnclick()}>About</h1>
      {/* <iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1343201752&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true">
    </iframe> */}
      <p>
        Hi! I am Ian Shih(施貽仁). Currently, I am studying Electrical
        Engineering in National Taiwan University.<br/>
        Besides research and studies, I'm also fascinated in some areas:
      </p>
      <h2>Maker experience</h2>
      <div
        // style={{
        //   display: "block",
        //   alignContent: "space-between",
        //   justifyContent: "space-between",
        // }}
        className={styles.div_maker_exp}
      >
        <p style={{ flexBasis: "60%", wordWrap: "break-word" }}>
          I love make projects with some hardware device such as Raspberry PI,
          ESP32 etc.
        </p>
        <h3>NTUEE Automatic Theremonitor System</h3>
        <p style={{ flexBasis: "60%", wordWrap: "break-word" }}>
          To collect the COVID-19 trace in NTU Campus, my classmates and I
          develop an Automatic Theremonitor System which record the daily
          temperature of all the faculty and students in the campus.
          <Img style={{width: "50%",margin:"auto"}} fluid={data.img_social_devotion_award.childImageSharp.fluid} />
          We recieved the Social Devotion Specail Award on the NTU Anniversary
          Ceremony by Dr. Chung-Ming Kuan, the President of NTU.
        </p>

        <h3>Light Dance</h3>
        <p style={{ flexBasis: "60%", wordWrap: "break-word" }}>
          The video is the performance of Light Dance, which is 100% homemade by
          my peers and me. I am responsible for communication between the lights
          on each dancers and the laptop playing the music.
        </p>
        <div style={{margin:"auto",width: "100%"}}>
        <iframe
          style={{ flexBasis: "35%" }}
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/iHg-aeB9Jpo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      </div>

      <h2>Music as my leisure</h2>
      <div
        // style={{
        //   display: "flex",
        //   alignContent: "space-between",
        //   justifyContent: "space-between",
        // }}
        className={styles.div_music_exp}
      >
        <p style={{ flexBasis: "60%" }}>
          In my leisure time, I enjoy remixing or composing music!
          {/* My inspiration often comes from my living, such as ringtone of an mobile */}
          {/* app, melody of Taipei Metro System, or the pop/clasical music in my life.  */}
          My music compositions/improvisations are now available on{" "}
          <a target="_blank" href="https://soundcloud.com/atosystem">
            SoundCloud
          </a>
          ! Here is the music I made!
        </p>
        <div style={{ flexBasis: "35%", textAlign: "center" }}>
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1343201752&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: "100",
            }}
          >
            <a
              href="https://soundcloud.com/atosystem"
              title="atosystem"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              atosystem
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/atosystem/sets/piano-remix-by-cornerhipster"
              title="Piano Remix/Improvisation by Cornerhipster"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Piano Remix/Improvisation by Cornerhipster
            </a>
          </div>
        </div>
        {/* <iframe
          style={{ flexBasis: "35%" }}
          loading="lazy"
          width="20%"
          height="500"
          scrolling="no"
          frameborder="yes"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1343201752&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
          data-rocket-lazyload="fitvidscompatible"
          class="lazyloaded"
          data-ll-status="loaded"
        ></iframe> */}
      </div>
      <h2>VFX</h2>
      <div>
        I love applying Visual Effects in videos. One of my hobby is to watch the VFX breakdown of famous movies. It always render me astonished about how realistic VFX can be.
        The following a video I made, where I replace the MOS Burger logo with MOSFET(a kind of transistor).
        <div style={{margin:"auto",width: "100%"}}>
        <iframe
          style={{ flexBasis: "35%" }}
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/8Tr-fAMKnwI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
