const React = require("react")

export const onPreRenderHTML = ({ replaceHeadComponents }) => {
  replaceHeadComponents([
    <html data-wf-page="60165d2a45ef1c92874b0c63" data-wf-site="60165d2a45ef1c835c4b0c62" />,
    <meta charSet="utf-8" />,
    <title>Acqua Carloforte - Sardegna</title>,
    <meta content="width=device-width, initial-scale=1" name="viewport" />,
    <meta content="Webflow" name="generator" />,
    <link href="css/normalize.css" rel="stylesheet" type="text/css" />,
    <link href="css/webflow.css" rel="stylesheet" type="text/css" />,
    <link href="css/acqua-carloforte.webflow.css" rel="stylesheet" type="text/css" />,
    <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />,
    <link href="images/webclip.png" rel="apple-touch-icon" />
  ])
}
