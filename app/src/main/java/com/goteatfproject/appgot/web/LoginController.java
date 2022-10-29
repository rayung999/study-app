package com.goteatfproject.appgot.web;

import com.goteatfproject.appgot.service.MemberService;
import com.goteatfproject.appgot.vo.User;
import java.net.URLEncoder;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/auth")
public class LoginController {

  MemberService memberService;

  public LoginController(MemberService memberService) {
    this.memberService = memberService;
  }

  @GetMapping("/login")
    public String login(@CookieValue(name="id", defaultValue = "") String id, Model model) throws Exception {
      model.addAttribute("id", id);
      return "login/login";
  }

//  @PostMapping("/login")
//  public String login(@ModelAttribute @Validated LoginForm loginForm,
//                      BindingResult bindingResult,
//                      @RequestParam(defaultValue = "/") String redirectURL) {
//
//    if (bindingResult.hasErrors()) {
//      return "login/login";
//    }
//
//    Member loginMember = loginService.login(loginForm.getLoginId(), loginForm.getPassword());
//
//    if (loginMember == null) {
//      bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");
//      return "login/login";
//    }
//
//    // 로그인 성공 처리
//
//    return "redirect:" + redirectURL;
//  }

  @PostMapping("/login")
    public String login(
        String id,
        String password,
        String saveEmail,
        HttpServletResponse response,
        HttpSession session) throws Exception {

    User user = memberService.get(id, password);

    if (user != null) {
      session.setAttribute("loginMember", user); // 로그인한 멤버 정보를 세션 보관소에 저장
    }

    // 클라이언트에게 쿠키 보내기
    // - 쿠키 데이터는 문자열만 가능
    Cookie cookie = new Cookie("id", id); // 클라이언트 쪽에 저장할 쿠키 생성
    if (saveEmail == null) {
      cookie.setMaxAge(0); // 클라이언트에게 해당 이름의 쿠키를 지우라고 명령한다.
    } else {
      // 쿠키의 지속시간을 설정하지 않으면 웹브라우저가 실행되는 동안만 유효하다.
      // 만약 웹브라우저를 종료하더라도 쿠키를 유지하고 싶다면,
      // 지속 시간을 설정해야 한다.
      cookie.setMaxAge(60 * 60 * 24 * 7); // 7일
    }

    response.addCookie(cookie); // 응답 헤더에 쿠키를 포함시킨다.

//      ModelAndView mv = new ModelAndView("loginResult");
//      mv.addObject("user", user);
//      return mv;
//
    return "index";
}

  @GetMapping("/logout")
  public String logout(HttpSession session) {
    // 1. 세션을 종료
    session.invalidate();
    // 2. 홈으로 이동
    return "redirect:/";
  }

}
