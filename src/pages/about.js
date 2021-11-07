import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"
import Img from "gatsby-image"

import TwitterIcon from "@material-ui/icons/Twitter"
import { Email, Facebook, GitHub, Instagram } from "@material-ui/icons"

import { FaMedium } from "@react-icons/all-files/fa/FaMedium"
import { useEffect } from "react"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      bg_music: file(
        sourceInstanceName: { eq: "music" }
        name: { eq: "intro_bgm" }
      ) {
        publicURL
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
        Engineering in National Taiwan University.
      </p>
      <h2>Maker experience</h2>
      <div
        style={{
          display: "flex",
          alignContent: "space-between",
          justifyContent: "space-between",
        }}
      >
        <p style={{ flexBasis: "60%", wordWrap: "break-word" }}>
          I love make projects with some hardware device such as Raspberry PI,
          ESP32 etc. <br />
          The video is ghe performance of Light Dance, which is 100% homemade by
          my peers and me. I am responsible for communication between the lights
          on each dancers and the laptop playing the music.
        </p>
        <iframe
          style={{ flexBasis: "35%" }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OTdngU70CHo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h2>Music as my leisure</h2>
      <div
        style={{
          display: "flex",
          alignContent: "space-between",
          justifyContent: "space-between",
        }}
      >
        <p style={{ flexBasis: "60%" }}>
          In my leisure time, I enjoy remixing or composing music! My
          inspiration often comes from my living, such as ringtone of an mobile
          app, melody of Taipei Metro System, or the pop/clasical music in my
          life. My music compositions are now available on{" "}
          <a target="_blank" href="https://soundcloud.com/atosystem">
            SoundCloud
          </a>
          ! Here is the music I made!
        </p>
        <iframe
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
        ></iframe>
      </div>
    </Layout>
  )
}

export default AboutPage