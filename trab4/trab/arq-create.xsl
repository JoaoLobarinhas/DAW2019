<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="xmls/arq{count(preceding::ARQELEM) + 1}.xml">
            <xsl:processing-instruction name="xml-stylesheet">type="text/xsl" href="arq.xsl"</xsl:processing-instruction>
            <xsl:copy-of select="."/>
        </xsl:result-document>
    </xsl:template>
    
    
</xsl:stylesheet>