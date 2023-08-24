---
id: 1tz3ihj42jnhw702jz8i56n
title: Audio Fingerprinting using the AudioContext API
desc: ""
description: "How audio fingerprinting works using the AudioContext API"
updated: 1692905601017
created: 1692300842027
tags:
  - fingerprinting
  - audio-fingerprinting
image: /content/cover/audio-fingerprinting.png
cover_image: https://raw.githubusercontent.com/oneminch/portfolio/main/public/content/cover/audio-fingerprinting.png
canonical_url: https://oneminch.dev/blog/audio-fingerprinting
head:
  meta:
    - name: robots
      content: "index, follow"
    - name: author
      content: Dawit U (@oneminch)
    - property: "og:type"
      content: article
    - name: "twitter:card"
      content: summary_large_image
series: Web Tracking Technologies
nav_order: 4
---

Fingerprinting as introduced in [this article](https://oneminch.dev/blog/canvas-fingerprinting/) is a way of identifying users based on one or more set of unique device characteristics. Along with Canvas fingerprinting, **Audio fingerprinting** takes advantage of device performance specs to build up an identifying fingerprint of a user. The problem is it does not need to take any **permission** from the users and works on all browsers and can be used to **track users** across browsers.

It has the same basic process of doing this as canvas fingerprinting. Assign a task to the browser, record how it is executed, and use such data to build the fingerprint.

Recently, several sites have been found to be using such techniques to track activity across browsers on a device.

### More details

In the case of audio fingerprinting, the fingerprinting is based on the **device's audio stack**. Just as canvas fingerprinting takes advantage of the Canvas API, the technology that makes audio fingerprinting possible is an API called the **AudioContext API**. It is an **interface of the Web Audio API** that is a part of most modern browsers.

The browser is assigned the task of **generating an audio signal** and it's processed based on the device's audio setting and audio hardware installed on it.

A website uses the **AudioContext API** to send a low frequency audio through the browser to the computer. It then measures how the computer processes this sent data. Based on how this signal is processed, the results from the AudioContext API can help identify the same user across different browsers.

This process **doesn't require access to the device permissions** like microphone or speakers. No audio is recorded, collected or played by any means. It gathers the audio signature of a user's device and uses it to create an identifier to track that user. It simply relies on the difference in the way these generated signals are processed on each device.

Since this technique utilizes the **device's (hardware) capability differences** and not just the browser's — it can be used to **track users across different browsers** as long as they're on the same device. Browser compartmentalization (a method where a person uses two or more dedicated browsers for different Internet activities) can be used to escape cookies set by different trackers.

**Firefox's multi-account containers** add-on offers the same type of functionality and can be used to separate various web tasks into containers which are kept apart from each other. Cookies have become a less effective technique to these and various other prevention methods. However, methods like audio fingerprinting make it possible to identify users despite the fact that they are using different browsers.

Consider this code snippet:

```javascript
    console.log(new AudioContext());

    // Logs an AudioContext object
    // to the console:
    {
        "baseLatency": 0,
        "outputLatency": 0,
        "sampleRate": 48000,
        "state": "suspended",
        "maxChannelCount": 2,
        "numberOfInputs": 1,
        "numberOfOutputs": 1,
        "channelCount": 1,
        "channelCountMode": "max",
        "channelInterpretation": "speakers",
        "fftSize": 2048,
        "frequencyBinCount": 1024,
        "minDecibels": -100,
        "maxDecibels": -30,
        "smoothingTimeConstant": 0.8
    }
```

Using methods such as `createAnalyser()`, `createDynamicsCompressor()` and `createOscillator()` can be used to further develop unique device information. Other fingerprinting methods can be used in conjunction with this one to get an even more accurate identifier. All the information collected is passed onto a hash function to make up the fingerprint.

- `createAnalyser()`: can be used to reveal time and frequency data of the audio and create data visualizations through a node created called `AnalyserNode`.
- `createDynamicsCompressor()`: can be used to compress an audio signal through the `DynamicsCompressorNode`.
- `createOscillator()`: results in the creation of a given frequency of a given periodic wave to be created through `OscillatorNode`.
- `createGain()`: creates a `GainNode` which is responsible for detecting the change in volume.

This piece of code performs fingerprint as found in [cc.js of CDN-NET](https://www.cdn-net.com/cc.js) and [OpenWPM](https://audiofingerprint.openwpm.com)

1. First, we need to create an array to store frequency values.

```javascript
let freq_data = [];
```

2. We create an AudioContext object and create the various nodes needed to generate signal and collect the information using the built-in methods of the AudioContext object.

```javascript
// Create nodes
const ctx = new AudioContext(); // AudioContext Object
const oscillator = ctx.createOscillator(); // OscillatorNode
const analyser = ctx.createAnalyser(); // AnalyserNode
const gain = ctx.createGain(); // GainNode
const scriptProcessor = ctx.createScriptProcessor(4096, 1, 1); // ScriptProcessorNode
```

3. We disable the volume and connect the nodes with each other.

```javascript
// Disable volume
gain.gain.value = 0;

// Connect oscillator output (OscillatorNode) to analyser input
oscillator.connect(analyser);
// Connect analyser output (AnalyserNode) to scriptProcessor input
analyser.connect(scriptProcessor);
// Connect scriptProcessor output (ScriptProcessorNode) to gain input
scriptProcessor.connect(gain);
// Connect gain output (GainNode) to AudioContext destination
gain.connect(ctx.destination);
```

4. Using the `ScriptProcessorNode`, we create a function that collects frequency data while the audio is being processed.

- The function creates a `Float32Array` typed array with a length that equals the number of (frequency) data values in the `AnalyserNode` and then populates it with the values.
- These values are then copied to the array we created earlier (`freq_data`) so we can log them easily to an output.
- We disconnect the nodes and log the output.

```javascript
scriptProcessor.onaudioprocess = function (bins) {
  // The number of (frequency) data values
  bins = new Float32Array(analyser.frequencyBinCount);
  // Fill the Float32Array array of these based on values
  analyser.getFloatFrequencyData(bins);

  // Copy frequency data to 'freq_data' array
  for (var i = 0; i < bins.length; i = i + 1) {
    freq_data.push(bins[i]);
  }

  // Disconnect the nodes from each other
  analyser.disconnect();
  scriptProcessor.disconnect();
  gain.disconnect();

  // Log output of frequency data
  console.log(freq_data);
};
```

5. We start playing the tone so the audio is generated and processed in accordance with the function.

```javascript
// Start playing tone
oscillator.start(0);
```

We get an output like the one displayed below. The values are a lot longer than 10 values. This is for the sake of simplification.

```javascript
/*
     Output:
     [ 
         -119.79788967947266, -119.29875891113281, -118.90072674835938,
         -118.08164726269531, -117.02244567871094, -115.73435120521094,
         -114.24555969238281, -112.56678771972656, -110.70404089034375,
         -108.64968109130886, ...
     ]
   */
```

A combination of all these audio data values can be processed through a hash function to create a unique fingerprint. Values passed from other methods of fingerprinting can also be aggregated to be hashed and produce a fingerprint of a device.

Some possible defenses against this tracking method work by adding a small noise to the actual fingerprint to generate a random fake value and reporting it as such. This is seen in add-ons like [AudioContext Fingerprint Defender](https://addons.mozilla.org/en-US/firefox/addon/audioctx-fingerprint-defender/). The TOR browser is by far the only browser that blocks these types of tracking methods by default.

### References

[Canvas fingerprinting](https://iq.opengenus.org/canvas-fingerprinting/)  
[Methods to track users on the Web](https://iq.opengenus.org/methods-to-track-user-on-web/)  
[OpenWPM](https://audiofingerprint.openwpm.com)  
[AudioContext API](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext)  
[(Cross-)Browser Fingerprinting via OS and Hardware Level Features](https://yinzhicao.org/TrackingFree/crossbrowsertracking_NDSS17.pdf)
