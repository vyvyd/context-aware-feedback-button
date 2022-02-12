package demo.ssrmfe

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get

@SpringBootTest
@AutoConfigureMockMvc
class WebEndpointTest {

    @Autowired
    private lateinit var mockMvc: MockMvc

    @Test
    fun hasIndex() {
        val response = mockMvc.get("/")
            .andExpect { status { isOk() } }
    }
}