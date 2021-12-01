---
title: Mobile Phone Sensor to Puredata
stack: HTML & python
slug: sensor-puredata
date: 2021-12-01T00:00:00+00:00
thumb: ./structure.png
featuredImg: 
tags: ["music", "puredata", "project"]
description: "Theme-based music generation"
---

![](./structure.png)
<div style="text-align: center">Overall Structure</div>

## TL;DR
In this project, I create a web interface and server for smart phones to send sensors data to pure data with only a simple scan of a QR Code.

## Motivation
Mobile phones are prevalent among people in nowadays as well as network connection.
Is there anything we can do with music and people?

> What if we can turn smart phones into instruments via the Internet?

> What if people can join in music with just a scan of an QR Code?

> What if all of us can be part of a music with only smart phones?

I then come up with an idea to transmit phone data to puredata to make cool music and sound effects.

Smart phone come with plenty of sensors such as accelermotor, gyroscope and so on. These built-in sensors can serve as wonderful sound controlling medium.
Nonetheless, the most crucial challenge is to make sure low latency for transmitting data through the Internet to puredata.

The first thing I thought of is UDP, since udp is a protocol with low latency. 
However, after some trial and survey, most of the web browsers have strict security restriction. 
It is not possible to initiate a udp/tcp socket with in a web browser due to safety concern. 
Only websocket is available but it is based on tcp protocol which doesn't gaurantee transmitting speed. 
On the other hand, for a web page to gain access to the user's phone sensors, it should be host by "https". Also, with `mixed content` constraint, I cannot set up a https website and employ `localhost` websocket for communication to speed up the data transmission. 

## Method
To solve the problems mentioned above, WebRTC comes into my sight. WebRTC is a commuunication tool developed by Google mainly for video and audio streaming serice.
In this project, I develop a website for user to connect their phones to puredata via WebRTC, with just a scan of an QRCode.

The following is the basic structure of data trasnmitting
![](./structure.png)

First, the web browser of localhost is opened. Then it generate a `connect_code` to firebase. The `connect_code` and the webpage for mobile phone is subsequently packed in a QR Code. After the user scan the QR code  with his/her phone, the phone's web browser is connected to that of localhost via WebRTC with the matching of `connect_code`. The rest of the data transmission process is purely P2P. As for the server side, the message received by localhost web browser is then sent to backend server via webspcket (since only websocket is allowed in web browser). The backend sever then send the message to coressponding udp port of puredata. Pureda employs [netreceive -u \<udp port number\>] to receive message.