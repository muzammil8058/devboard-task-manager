package com.devboard.devboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devboard.devboard.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
