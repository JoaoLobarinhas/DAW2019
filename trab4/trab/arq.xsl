<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:output method="html" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Arqueossítios do Nordeste de Portugal</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            </head>
            <body class="w3-container">
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <div class="w3-panel w3-yellow w3-center">
            <h1><xsl:value-of select="IDENTI"/></h1>
        </div>
        <div>
            <p><xsl:apply-templates/></p>
        </div>
    </xsl:template>
    
</xsl:stylesheet>