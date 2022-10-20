package com.kimra.board.domain;

import java.sql.Date;

public class Feed {

    private int fno;
    private int mno;
    private String fTitle;
    private String fCont;
    private Date fDate;
    private int fView;

    @Override
    public String toString() {
        return "Feed [fno=" + fno + ", mno=" + mno + ", fTitle=" + fTitle + ", fCont=" + fCont + ", fDate=" + fDate
                + ", fView=" + fView + "]";
    }

    public int getFno() {
        return fno;
    }

    public void setFno(int fno) {
        this.fno = fno;
    }

    public int getMno() {
        return mno;
    }

    public void setMno(int mno) {
        this.mno = mno;
    }

    public String getfTitle() {
        return fTitle;
    }

    public void setfTitle(String fTitle) {
        this.fTitle = fTitle;
    }

    public String getfCont() {
        return fCont;
    }

    public void setfCont(String fCont) {
        this.fCont = fCont;
    }

    public Date getfDate() {
        return fDate;
    }

    public void setfDate(Date fDate) {
        this.fDate = fDate;
    }

    public int getfView() {
        return fView;
    }

    public void setfView(int fView) {
        this.fView = fView;
    }



}
