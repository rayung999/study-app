package com.goteatfproject.appgot.vo;

import java.sql.Date;

public class Board {
  private int no;
  private String title;
  private String content;
  private String password;
  private int viewCount;
  private Date createdDate;
  private User writer;
}
