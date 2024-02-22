"use client";

import { fetchAllCharacters } from "@/lib/actions/character.action";
import { fetchAllUsers, fetchUserById } from "@/lib/actions/user.actions";
import React, { useEffect, useState } from "react";
import HeroesCharactersList from "./lists/HeroesCharactersList";
import HeroesHeroesList from "./lists/HeroesHeroesList";

const Heroes = () => {
    const [users, setUsers] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchUsersData = async () => {
            try {
                const result = await fetchAllUsers();

                setUsers(result as []);
            } catch (error: any) {
                throw new Error("Failed to fetch users:", error);
            }
        };

        const fetchCharactersData = async () => {
            try {
                const result = await fetchAllCharacters();

                setCharacters(result as []);
            } catch (error: any) {
                console.log(error);
                throw new Error("Failed to fetch characters:", error);
            }
        };

        fetchUsersData();
        fetchCharactersData();
    }, []);

    return (
        <main className="grid grid-cols-10 gap-6 p-6">
            <HeroesHeroesList users={users}></HeroesHeroesList>
            <HeroesCharactersList
                characters={characters}
            ></HeroesCharactersList>
        </main>
    );
};

export default Heroes;
