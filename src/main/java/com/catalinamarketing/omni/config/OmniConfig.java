package com.catalinamarketing.omni.config;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name="omniConfig")
public class OmniConfig {
	private String cappingUrl;
	private String targetingUrl;
	private String eventsUrl;

	public OmniConfig() {
	}
	
	public String getTargetingUrl() {
		return targetingUrl;
	}

	public void setTargetingUrl(String targetingUrl) {
		this.targetingUrl = targetingUrl;
	}

	public String getCappingUrl() {
		return cappingUrl;
	}

	public void setCappingUrl(String cappingUrl) {
		this.cappingUrl = cappingUrl;
	}

	public String getEventsUrl() {
		return eventsUrl;
	}

	public void setEventsUrl(String eventsUrl) {
		this.eventsUrl = eventsUrl;
	}
}
