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
import { Button } from "@material-ui/core"

const SurveyEnPage = () => {
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
    const websites = [
      "https://docs.google.com/forms/d/e/1FAIpQLScEUIfBkuG715xY1diEvQCi9_9pyrAkeSVWAn-JbzbqInrvSw/viewform",
      "https://docs.google.com/forms/d/e/1FAIpQLSde0suyNzvJlugulLbOXLm-HRp9ZmMsHAybbqq-6D-VuXBG6w/viewform",
      "https://docs.google.com/forms/d/e/1FAIpQLSfp9_9kynOFiaDoDYNIWhQIzYAsBDar7X2JGk8BsLTiT27lLQ/viewform",
      "https://docs.google.com/forms/d/e/1FAIpQLSdRwd3hxp8dN_WqiReSsUCchVeZgEs2f-YAcjtuMKu-vagZrw/viewform"]
    const randomUrl = websites[Math.floor(Math.random() * websites.length)];
    // bg_audio_instance.play()
    // alert("asd")
    window.location.href = randomUrl;
  }
  return (
    <Layout>
      <Seo title="Theme based AI Music User Study" />

      <h1 >Theme based AI Music User Study</h1>
      Hello!<br/>
      We are Music and Artificial Intelligence Lab @ Academia Sinica in Taiwan.<br/>
      First of all, we sincerely appreciate your help with this user study.<br/>
      <br/>
      We are developing AI models that can compose songs given a musical theme as condition.<br/>
      <br/>
      This survey may take 15~20 minutes to finish. You will listen to some music pieces and evaluate them following our instructions.<br/>
      <br/>
      To start the survey, click the button below and we will randomly assign a google form for you.<br/>
      If you have any problem, feel free to contact me (Ian Shih) via <a href={"mailto:yjshih23@gmail.com"}>yjshih23@gmail.com</a><br/>
      Happy listening!
      <br/>
      The survey is closed!
      {/* <div style={{margin:"10px",textAlign:"center"}}>
      <Button onClick={handleOnclick} variant="outlined" color="primary">
      Click Me
    </Button>
    
    </div> */}
    </Layout>
  )
}

export default SurveyEnPage
