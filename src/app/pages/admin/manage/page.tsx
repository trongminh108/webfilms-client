'use client';

import './manage.scss';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

import { getAllFilms } from '@/graphql-client/queries';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { user_role } from '@/constants/cookies';
import { useData } from '@/app/components/context/context';

function Manage() {
    useEffect(() => {
        document.title = 'Manage';
    }, []);

    const iconSize = 35;
    const { loading, error, data: filmData } = useQuery(getAllFilms);
    const cookie_role = Cookies.get(user_role);
    const { setData } = useData();

    if (loading) return <p>Loading</p>;
    if (error) {
        console.log('Error: ', error.message);
        return <p>Error</p>;
    }

    if (cookie_role != '1')
        return (
            <Container className="manageContainer">
                <p className="text-white">{`You need admin permission :<`}</p>
            </Container>
        );

    function handleClickEdit(film: any) {
        setData(film);
    }

    return (
        <Container className="manageContainer">
            <Row>
                <Col>
                    <h1 className="text-white py-2">List Films</h1>
                </Col>
            </Row>
            <Row className="px-3">
                <table className="table table-hover table-bordered">
                    <thead className="table-header">
                        <tr className="">
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filmData.films.map((film: any, idx: number) => {
                            return (
                                <tr key={film.id}>
                                    <td className="align-middle text-center">
                                        {idx + 1}
                                    </td>
                                    <td className="w-25 align-middle">
                                        {film.name}
                                    </td>
                                    <td className="align-middle text-center">
                                        <Image
                                            id={film.id}
                                            alt="film poster"
                                            className=""
                                            src={film.poster}
                                            width={54}
                                            height={80}
                                        />
                                    </td>
                                    <td className="align-middle text-center">
                                        <Link
                                            href={`/pages/admin/edit-film/${film.id}`}
                                            onClick={() =>
                                                handleClickEdit(film)
                                            }
                                        >
                                            <FiEdit
                                                className="text-warning"
                                                size={iconSize}
                                            />
                                        </Link>
                                    </td>
                                    <td className="align-middle text-center">
                                        <Link href={`text`}>
                                            <MdDelete
                                                className="text-danger"
                                                size={iconSize}
                                            />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Row>
        </Container>
    );
}

export default Manage;
