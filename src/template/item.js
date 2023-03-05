const item = ({
  title,
  subtitle,
  link,
  image,
}) => `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
<tbody><tr>
  <td id="imageBlock-14" align="center">
    <a href="${link}" data-link-id="960357277" target="_self">

<img src="${image}" border="0" alt="" width="267" style="display: block;">

</a>
  </td>
</tr>
<tr>
  <td align="center" style="padding: 0px 20px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
      <tbody><tr>
        <td height="20" class="spacingHeight-20"></td>
      </tr>
      <tr>
        <td align="left" class="bodyTitle" id="bodyText-14" style="font-family: &#39;Poppins&#39;, sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
          <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"><strong></strong><strong><span style="font-size: 16px;">${title}</span></strong><br>${subtitle}</p>
        </td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table>`;

module.exports = { item };
