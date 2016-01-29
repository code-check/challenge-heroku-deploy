package jp.co.givery.portfolio.spring;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
public class SandboxController {
	@RequestMapping(value = "/api/ping", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<String> ping () {
		return new ResponseEntity<String>("\"PONG\"", HttpStatus.OK);
	}

	@RequestMapping(value = "/api/notfound", method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<String> notfound () {
		return new ResponseEntity<String>("\"NotFound\"", HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "/api/badrequest", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<String> badrequest () {
		return new ResponseEntity<String>("\"BadRequest\"", HttpStatus.BAD_REQUEST);
	}
}
