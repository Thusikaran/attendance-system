package com.example.attendance_system;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class LoginController {

    private static final String SECRET_KEY = "kjjbhbjsdhhxcghijdsohjasdsohidhhdhd";
    private static final Path USERS_FILE = Paths.get("./data.txt");

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        if (!isValidUser(username, password)) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plusSeconds(3600)))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes())
                .compact();

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        return ResponseEntity.ok(response);
    }

    private boolean isValidUser(String username, String password) {
        try {
            return Files.lines(USERS_FILE)
                    .anyMatch(line -> line.equals(username + ":" + password));
        } catch (Exception e) {
            return false;
        }
    }
}
