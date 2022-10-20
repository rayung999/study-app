package com.kimra.board.domain;

import java.sql.Date;

public class Event {

    private int eno;
    private int mno;
    private String eTitle;
    private String eCont;
    private String eGender;
    private Date eDate;
    private String eLoc;
    private String ePost;
    private String eAddr;
    private int eView;
    private String eImg;
    private boolean ePub;

    @Override
    public String toString() {
        return "Event [eno=" + eno + ", mno=" + mno + ", eTitle=" + eTitle + ", eCont=" + eCont + ", eGender=" + eGender
                + ", eDate=" + eDate + ", eLoc=" + eLoc + ", ePost=" + ePost + ", eAddr=" + eAddr + ", eView=" + eView
                + ", eImg=" + eImg + ", ePub=" + ePub + "]";
    }

    public int getEno() {
        return eno;
    }

    public void setEno(int eno) {
        this.eno = eno;
    }

    public int getMno() {
        return mno;
    }

    public void setMno(int mno) {
        this.mno = mno;
    }

    public String geteTitle() {
        return eTitle;
    }

    public void seteTitle(String eTitle) {
        this.eTitle = eTitle;
    }

    public String geteCont() {
        return eCont;
    }

    public void seteCont(String eCont) {
        this.eCont = eCont;
    }

    public String geteGender() {
        return eGender;
    }

    public void seteGender(String eGender) {
        this.eGender = eGender;
    }

    public Date geteDate() {
        return eDate;
    }

    public void seteDate(Date eDate) {
        this.eDate = eDate;
    }

    public String geteLoc() {
        return eLoc;
    }

    public void seteLoc(String eLoc) {
        this.eLoc = eLoc;
    }

    public String getePost() {
        return ePost;
    }

    public void setePost(String ePost) {
        this.ePost = ePost;
    }

    public String geteAddr() {
        return eAddr;
    }

    public void seteAddr(String eAddr) {
        this.eAddr = eAddr;
    }

    public int geteView() {
        return eView;
    }

    public void seteView(int eView) {
        this.eView = eView;
    }

    public String geteImg() {
        return eImg;
    }

    public void seteImg(String eImg) {
        this.eImg = eImg;
    }

    public boolean isePub() {
        return ePub;
    }

    public void setePub(boolean ePub) {
        this.ePub = ePub;
    }



}
