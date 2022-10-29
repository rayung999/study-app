package com.goteatfproject.appgot.dao;

import com.goteatfproject.appgot.vo.AttachedFile;
import com.goteatfproject.appgot.vo.Board;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardDao {

  int insert(Board board);

  Board findByNo(int no);

  int update(Board board);

  int delete(int no);

  int deleteByMember(int memberNo);

  List<Board> findAll();

//  int insertFiles(Board board);
//
//  AttachedFile findFileByNo(int fileNo);
//
//  List<AttachedFile> findFilesByBoard(int boardNo);
//
//  int deleteFile(int fileNo);
//
//  int deleteFiles(int boardNo);
//
//  int deleteFilesByMemberBoards(int memberNo);
}
