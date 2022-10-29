package com.goteatfproject.appgot.service;

import com.goteatfproject.appgot.vo.AttachedFile;
import com.goteatfproject.appgot.vo.Board;

import java.util.List;

public interface BoardService {
  void add(Board board) throws Exception;

  boolean update(Board board) throws Exception;

  Board get(int no) throws Exception;

  boolean delete(int no) throws Exception;

  List<Board> list() throws Exception;

//  AttachedFile getAttachedFile(int fileNo) throws Exception;
//
//  boolean deleteAttachedFile(int fileNo) throws Exception;
}
