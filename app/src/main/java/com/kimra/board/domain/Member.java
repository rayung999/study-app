package com.kimra.board.domain;

import java.sql.Date;

public class Member {

    private int mno;
    private String id;
    private String pwd;
    private boolean grade;
    private String name;
    private String nick;
    private Date birth;
    private String tel;
    private String gender;
    private Date inDate;
    private String postnum;
    private String mainaddr;
    private String subaddr;
    private String interest;
    private boolean outState;
    private Date outDate;
    private String pImg;
    private String intro;

    @Override
    public String toString() {
        return "Member [mno=" + mno + ", id=" + id + ", pwd=" + pwd + ", grade=" + grade + ", name=" + name + ", nick="
                + nick + ", birth=" + birth + ", tel=" + tel + ", gender=" + gender + ", inDate=" + inDate
                + ", postnum=" + postnum + ", mainaddr=" + mainaddr + ", subaddr=" + subaddr + ", interest=" + interest
                + ", outState=" + outState + ", outDate=" + outDate + ", pImg=" + pImg + ", intro=" + intro + "]";
    }

    public int getMno() {
        return mno;
    }
    public void setMno(int mno) {
        this.mno = mno;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getPwd() {
        return pwd;
    }
    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
    public boolean isGrade() {
        return grade;
    }
    public void setGrade(boolean grade) {
        this.grade = grade;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getNick() {
        return nick;
    }
    public void setNick(String nick) {
        this.nick = nick;
    }
    public Date getBirth() {
        return birth;
    }
    public void setBirth(Date birth) {
        this.birth = birth;
    }
    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public Date getInDate() {
        return inDate;
    }
    public void setInDate(Date inDate) {
        this.inDate = inDate;
    }
    public String getPostnum() {
        return postnum;
    }
    public void setPostnum(String postnum) {
        this.postnum = postnum;
    }
    public String getMainaddr() {
        return mainaddr;
    }
    public void setMainaddr(String mainaddr) {
        this.mainaddr = mainaddr;
    }
    public String getSubaddr() {
        return subaddr;
    }
    public void setSubaddr(String subaddr) {
        this.subaddr = subaddr;
    }
    public String getInterest() {
        return interest;
    }
    public void setInterest(String interest) {
        this.interest = interest;
    }
    public boolean isOutState() {
        return outState;
    }
    public void setOutState(boolean outState) {
        this.outState = outState;
    }
    public Date getOutDate() {
        return outDate;
    }
    public void setOutDate(Date outDate) {
        this.outDate = outDate;
    }
    public String getpImg() {
        return pImg;
    }
    public void setpImg(String pImg) {
        this.pImg = pImg;
    }
    public String getIntro() {
        return intro;
    }
    public void setIntro(String intro) {
        this.intro = intro;
    }


}
