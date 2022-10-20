package com.kimra.board.domain;

import java.sql.Date;
import java.sql.Timestamp;

public class Party {

    private int pNo;
    private int mno;
    private Date pMeal;
    private String pFood;
    private String pTitle;
    private String pCont;
    private String pNick;
    private String pGender;
    private Timestamp pTime;
    private int pAge;
    private int pLit;
    private String pLoc;
    private String pPost;
    private String pAddr;
    private int pView;
    private String pImg;
    private boolean pPub;

    @Override
    public String toString() {
        return "Party [pNo=" + pNo + ", mno=" + mno + ", pMeal=" + pMeal + ", pFood=" + pFood + ", pTitle=" + pTitle
                + ", pCont=" + pCont + ", pNick=" + pNick + ", pGender=" + pGender + ", pTime=" + pTime + ", pAge="
                + pAge + ", pLit=" + pLit + ", pLoc=" + pLoc + ", pPost=" + pPost + ", pAddr=" + pAddr + ", pView="
                + pView + ", pImg=" + pImg + ", pPub=" + pPub + "]";
    }
    public int getpNo() {
        return pNo;
    }
    public void setpNo(int pNo) {
        this.pNo = pNo;
    }
    public int getMno() {
        return mno;
    }
    public void setMno(int mno) {
        this.mno = mno;
    }
    public Date getpMeal() {
        return pMeal;
    }
    public void setpMeal(Date pMeal) {
        this.pMeal = pMeal;
    }
    public String getpFood() {
        return pFood;
    }
    public void setpFood(String pFood) {
        this.pFood = pFood;
    }
    public String getpTitle() {
        return pTitle;
    }
    public void setpTitle(String pTitle) {
        this.pTitle = pTitle;
    }
    public String getpCont() {
        return pCont;
    }
    public void setpCont(String pCont) {
        this.pCont = pCont;
    }
    public String getpNick() {
        return pNick;
    }
    public void setpNick(String pNick) {
        this.pNick = pNick;
    }
    public String getpGender() {
        return pGender;
    }
    public void setpGender(String pGender) {
        this.pGender = pGender;
    }
    public Timestamp getpTime() {
        return pTime;
    }
    public void setpTime(Timestamp pTime) {
        this.pTime = pTime;
    }
    public int getpAge() {
        return pAge;
    }
    public void setpAge(int pAge) {
        this.pAge = pAge;
    }
    public int getpLit() {
        return pLit;
    }
    public void setpLit(int pLit) {
        this.pLit = pLit;
    }
    public String getpLoc() {
        return pLoc;
    }
    public void setpLoc(String pLoc) {
        this.pLoc = pLoc;
    }
    public String getpPost() {
        return pPost;
    }
    public void setpPost(String pPost) {
        this.pPost = pPost;
    }
    public String getpAddr() {
        return pAddr;
    }
    public void setpAddr(String pAddr) {
        this.pAddr = pAddr;
    }
    public int getpView() {
        return pView;
    }
    public void setpView(int pView) {
        this.pView = pView;
    }
    public String getpImg() {
        return pImg;
    }
    public void setpImg(String pImg) {
        this.pImg = pImg;
    }
    public boolean ispPub() {
        return pPub;
    }
    public void setpPub(boolean pPub) {
        this.pPub = pPub;
    }



}
