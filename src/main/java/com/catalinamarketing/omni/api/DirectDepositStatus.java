package com.catalinamarketing.omni.api;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import com.catalinamarketing.omni.util.SetupConstants;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "directDepositStatus")
public class DirectDepositStatus {

	@XmlElement(required = true)
	protected String awardId;

	@XmlElement(required = true)
	protected String status;

	@XmlElement(required = false)
	private String sourceType;
	
	@XmlElement(required = false)
	protected String mediaNumber;

	public String getSourceType() {
		return sourceType;
	}

	public void setSourceType(String sourceType) {
		this.sourceType = sourceType;
	}

	public String getMediaNumber() {
		return mediaNumber;
	}

	public void setMediaNumber(String mediaNumber) {
		this.mediaNumber = mediaNumber;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status
	 *            the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	public String getAwardId() {
		return awardId;
	}

	public void setAwardId(String awardId) {
		this.awardId = awardId;
	}

	/**
	 * Indicates the item printed successfully.
	 *
	 * @return true if item printed successfully
	 */
	public boolean printedSuccessfully() {
		return SetupConstants.PROMOTION_PRINTED.equalsIgnoreCase(status);
	}
}
