package demo.ssrmfe

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SsrMicrofrontendApplication

fun main(args: Array<String>) {
    runApplication<SsrMicrofrontendApplication>(*args)
}
