<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="html/index.html">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste de Portugal</title>
                    <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>     
                <body>
                    <div class="w3-container">
                        <h1 class="w3-center">Arqueossítios do Nordeste de Portugal</h1>
                        <h3>Indice</h3>
                        <ul>
                            <xsl:apply-templates mode="indice"/>
                        </ul>
                    </div>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="indice">
        <li>
            <a name="{generate-id()}"/>
            <a href="arq-{generate-id()}.html">
                <xsl:value-of select="IDENTI"/> - <xsl:value-of select="LUGAR"/>, <xsl:value-of select="FREGUE"
                />,<xsl:value-of select="CONCEL"/>
            </a>
        </li>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="html/arq-{generate-id()}.html">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste de Portugal: <xsl:value-of select="IDENTI"/></title>
                    <meta charset="UTF8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <table class="w3-table">
                        <tr>
                            <th>Descrição</th><td><xsl:value-of select="DESCRI/LIGA"/></td>                
                        </tr>
                        <tr>
                            <th>Lugar</th><td><xsl:value-of select="LUGAR"/></td>
                        </tr>
                        <tr>
                            <th>Concelho</th><td><xsl:value-of select="CONCEL"/></td>
                        </tr>
                        <tr>
                            <th>Freguesia</th><td><xsl:value-of select="FREGUE"/></td>
                        </tr>
                        <tr>
                            <th>CODAM</th><td><xsl:value-of select="CODAM"/></td>
                        </tr>
                        <tr>
                            <th>Longitude</th><td><xsl:value-of select="LONGIT"/></td>
                        </tr>
                        <tr>
                            <th>Latitude</th><td><xsl:value-of select="LATITU"/></td>
                        </tr>
                        <tr>
                            <th>Altitude</th><td><xsl:value-of select="ALTITU"/></td>
                        </tr>
                        <tr>
                            <th>Quadro</th><td><xsl:value-of select="QUADRO"/></td>
                        </tr>
                    </table>
                    <hr/>
                    <p><xsl:value-of select="DATA"/></p>
                    <hr/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar à página principal.</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
</xsl:stylesheet>