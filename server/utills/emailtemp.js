
export const emailHtml = ({ip, locationData}) => {
	return `
		<!DOCTYPE html>
		<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
		
		<head>
			<title></title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
			<!--[if !mso]><!-->
			<link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
			<link href="https://fonts.googleapis.com/css?family=Alegreya" rel="stylesheet" type="text/css">
			<link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" type="text/css">
			<link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css">
			<link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">
			<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css">
			<!--<![endif]-->
			<style>
				* {
					box-sizing: border-box;
				}
		
				body {
					margin: 0;
					padding: 0;
				}
		
				a[x-apple-data-detectors] {
					color: inherit !important;
					text-decoration: inherit !important;
				}
		
				#MessageViewBody a {
					color: inherit;
					text-decoration: none;
				}
		
				p {
					line-height: inherit
				}
		
				@media (max-width:520px) {
					.row-content {
						width: 100% !important;
					}
		
					.column .border {
						display: none;
					}
		
					.stack .column {
						width: 100%;
						display: block;
					}
				}
			</style>
		</head>
		
		<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
			<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
				<tbody>
					<tr>
						<td>
							<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;">
								<tbody>
									<tr>
										<td>
											<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
												<tbody>
													<tr>
														<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
															<table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<tr>
																	<td style="padding-bottom:10px;width:100%;padding-right:0px;padding-left:0px;">
																		<!-- <div align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/2966/LOGO.png" style="display: block; height: auto; border: 0; width: 125px; max-width: 100%;" width="125" alt="your-logo" title="your-logo"></div> -->
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;">
								<tbody>
									<tr>
										<td>
											<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 500px;" width="500">
												<tbody>
													<tr>
														<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 15px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
															<table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<tr>
																	<td style="padding-bottom:5px;padding-left:5px;padding-right:5px;width:100%;">
																		<div align="center" style="line-height:10px">
																		<img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/2966/gif-resetpass.gif" style="display: block; height: auto; border: 0; width: 350px; max-width: 100%;" width="350" alt="reset-password" title="reset-password">
																		</div>
																	</td>
																</tr>
															</table>
															<table class="heading_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<tr>
																	<td style="text-align:center;width:100%;">
																		<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 25px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Hexa Token admin logged-In</strong></h1>
																	</td>
																</tr>
															</table>
															<table class="text_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																<tr>
																	<td>
																		<div style="font-family: Tahoma, Verdana, sans-serif">
																			<div style="font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #393d47; line-height: 1.5;">
																				 <p style="margin: 0; font-size: 14px; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px;"><span style="font-size:14px;"><span style>Ip Address </span><span style>${locationData}.</span></span></p>
																			</div>
																		</div>
																	</td>
																</tr>
															</table>
												
															<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																<tr>
																	<td style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
																		<div style="font-family: Tahoma, Verdana, sans-serif">
												
																		</div>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							<!-- <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;">
								<tbody>
									<tr>
										<td>
											<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
												<tbody>
													<tr>
														<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
															<table class="text_block" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																<tr>
																	<td>
																		<div style="font-family: Tahoma, Verdana, sans-serif">
																			<div style="font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #393d47; line-height: 1.2;">
																				<p style="margin: 0; font-size: 14px; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; font-family: Tahoma, Verdana, Segoe, sans-serif;"><span style="font-size:10px;">This link will&nbsp;expire in 24 hours.&nbsp;If you continue to have problems</span><br><span style="font-size:10px;">please feel free to contact us at <a href="mailto:support@youremail.com" target="_blank" title="support@youremail.com" style="text-decoration: underline; color: #393d47;" rel="noopener">support@youremail.com</a>. <a href="Example.com" target="_blank" style="text-decoration: underline; color: #393d47;" rel="noopener">UNSUBSCRIBE</a></span></p>
																			</div>
																		</div>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table> -->
							<!-- <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;">
								<tbody>
									<tr>
										<td>
											<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
												<tbody>
													<tr>
														<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
															<table class="html_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<tr>
																	<td>
																		<div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;" align="center"><div style="height:30px;">&nbsp;</div></div>
																	</td>
																</tr>
															</table>
															<table class="social_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<tr>
																	<td style="text-align:center;padding-right:0px;padding-left:0px;">
																		<table class="social-table" width="168px" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																			<tr>
																				<td style="padding:0 5px 0 5px;"><a href="https://www.facebook.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-default-gray/facebook@2x.png" width="32" height="32" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
																				<td style="padding:0 5px 0 5px;"><a href="https://twitter.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-default-gray/twitter@2x.png" width="32" height="32" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
																				<td style="padding:0 5px 0 5px;"><a href="https://instagram.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-default-gray/instagram@2x.png" width="32" height="32" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
																				<td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-default-gray/linkedin@2x.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
															<table class="html_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<tr>
																	<td>
																		<div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;" align="center"><div style="margin-top: 25px;border-top:1px dashed #D6D6D6;margin-bottom: 20px;"></div></div>
																	</td>
																</tr>
															</table>
															<table class="text_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																<tr>
																	<td>
																		<div style="font-family: Tahoma, Verdana, sans-serif">
																			<div style="font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #C0C0C0; line-height: 1.2;">
																				<p style="margin: 0; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; font-family: Tahoma, Verdana, Segoe, sans-serif;">Duis euismod neque at lacus rutrum, nec suscipit eros tincidunt nterdum et malesuada.</p>
																				<p style="margin: 0; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; font-family: Tahoma, Verdana, Segoe, sans-serif;">Fames ac ante ipsum vestibulum.</p>
																				<p style="margin: 0; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
																				<p style="margin: 0; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; font-family: Tahoma, Verdana, Segoe, sans-serif;">Your Street 12, 34567 AB City&nbsp; /&nbsp;&nbsp;info@example.com /&nbsp;(+1) 123 456 789<a href="http://www.example.com" style></a></p>
																				<p style="margin: 0; font-size: 12px; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; font-family: Tahoma, Verdana, Segoe, sans-serif;"><span style="color:#c0c0c0;">&nbsp;</span></p>
																			</div>
																		</div>
																	</td>
																</tr>
															</table>
															<table class="html_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<tr>
																	<td>
																		<div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;" align="center"><div style="height-top: 20px;">&nbsp;</div></div>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table> -->
						</td>
					</tr>
				</tbody>
			</table><!-- End -->
		</body>
		
		</html>`
			
}

