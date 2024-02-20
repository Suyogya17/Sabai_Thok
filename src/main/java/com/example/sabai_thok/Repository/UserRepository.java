package com.example.sabai_thok.Repository;


import com.example.sabai_thok.Dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserDto, Integer> {

    @Query(value = "select * from users where email=?1", nativeQuery = true)
    Optional<UserDto> getUserByUsername(String username);
}
