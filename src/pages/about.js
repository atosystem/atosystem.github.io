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
  console.log(data)
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
    </Layout>
  )
}

export default AboutPage
