<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Project Record</title>
                <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            </head>     
            <body>
                <div class="w3-container">
                    <h1 class="w3-center">Project Record</h1>
                    <hr/>
                    <xsl:apply-templates/>
                </div>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="header">
        <hr/>
            <table class="w3-panel w3-table">
                <tr>
                    <th>Keyname:</th>
                    <td><xsl:value-of select="keyname"/></td>
                    <th>Begin-date:</th>
                    <td><xsl:value-of select="begin-date"/></td>
                </tr>
                <tr>
                    <th>Title:</th>
                    <td><xsl:value-of select="title"/></td>
                    <th>End-Date:</th>
                    <td><xsl:value-of select="end-date"/></td>
                </tr>
                <tr>
                    <th>Sub-title</th>
                    <td><xsl:value-of select="subtitle"/></td>
                    <th>Supervisor:</th>
                    <td><a href="{supervisor/@url}"><xsl:value-of select="supervisor"/></a></td>
                </tr>
            </table>
            <hr/>
    </xsl:template>
    
    <xsl:template match="workTeam">
        <div class="w3-panel">
            <h2>Workteam:</h2>
            <ol>
                <li>
                    <xsl:value-of select="element/number"/> - <xsl:value-of select="element/name"/> - <xsl:value-of select="element/email"/>
                </li>
            </ol>
        </div>
        <hr/>
    </xsl:template>
    
    <xsl:template match="abstract">
        <div class="w3-panel">
            <h2>ABSTRACT:</h2>
            <xsl:for-each select="text">
                <p><xsl:apply-templates/></p>
            </xsl:for-each>
        </div>
        <hr/>
    </xsl:template>
    
    <xsl:template match="italic">
        <i><xsl:apply-templates/> </i>
    </xsl:template>
    
    <xsl:template match="bold">
        <b><xsl:apply-templates/> </b>
    </xsl:template>
    
    <xsl:template match="underline">
        <u><xsl:apply-templates/> </u>
    </xsl:template>
    
    <xsl:template match="link">
        <a href="{link/@url}"><xsl:value-of select="."/></a>
    </xsl:template>
    
    <xsl:template match="deliverables">
        <h2>Deliverables:</h2>
        <ul>
            <xsl:for-each select="deliverable">
                <li>
                    <a href="{@url}"><xsl:value-of select="."/></a>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>
    
</xsl:stylesheet>