package demo.ssrmfe

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import javax.servlet.http.HttpServletResponse
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestMapping



@SpringBootApplication
class SsrMicrofrontendApplication

fun main(args: Array<String>) {
    runApplication<SsrMicrofrontendApplication>(*args)
}

@Controller
class WebEndpoint {

    @GetMapping()
    fun index(): String {
        return "index"
    }
}