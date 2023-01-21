import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Box, HStack, Text } from "@chakra-ui/react";


const Pagination = ({ values, setNewValues, pageLength }) => {
    //Pagination //specify the length of items per row
    const [currentPage, setCurrentPage] = useState(0);

    const setPagination = () => {
        let pageNumbers = 0;
        if (values?.length % pageLength === 0) {
            pageNumbers = values?.length / pageLength;
        } else {
            pageNumbers = values?.length / pageLength + 1;
        }
        const numbers = [];

        let x = 1;
        while (x <= pageNumbers) {
            numbers.push(x);
            x += 1;
        }

        return { pageNumbers, numbers };
    };

    const listSlicer = (pageNo) => {
        if (pageNo > 0 && pageNo <= setPagination().pageNumbers) {
            const start = pageNo * pageLength - pageLength;
            const stop = pageNo * pageLength;
            setNewValues(values.slice(start, stop));
            setCurrentPage(pageNo);
        }
    };

    useEffect(() => {
        if (values?.length > pageLength) {
            listSlicer(1);
        } else {
            setNewValues(values);
            setCurrentPage(1);
        }
    }, [values]); // eslint-disable-line

    //Pagination

    return (
        <>
            <div className="flex pb-10 pr-5 bg-white justify-end pt-2">
                <div></div>
                <div
                    className="flex justify-center align-center text-[#4A4C56]"
                    style={{ fontSize: 14 }}
                >

                    <HStack paddingTop='20px'>
                        <HStack
                            height='40px'
                            width='40px'
                            border={`1px solid ${currentPage <= 1 ? "#DFE6E9" : "#7C1B4C"}`}
                            align='center'
                            borderRadius='8px'
                            justify='center'
                        >
                            <div
                                onClick={() => listSlicer(currentPage - 1)}
                                className="cursor-pointer"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.5 15L7.57071 10.0707C7.53166 10.0317 7.53166 9.96834 7.57071 9.92929L12.5 5"
                                        stroke={`${currentPage <= 1 ? "#9FA2B4" : "#7C1B4C"}`}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>

                            </div>
                        </HStack>
                        <HStack>
                            <Text>
                                {currentPage * pageLength - pageLength + 1}-
                                {values?.length > pageLength
                                    ? pageLength * currentPage
                                    : values?.length}{" "}
                                of {values?.length}
                            </Text>
                        </HStack>

                        <HStack
                            height='40px'
                            width='40px'
                            border={`1px solid ${currentPage >= setPagination().pageNumbers ? "#DFE6E9" : "#7C1B4C"}  `}
                            align='center'
                            borderRadius='8px'
                            justify='center'
                        >
                            <div
                                onClick={() => listSlicer(currentPage + 1)}
                                className="cursor-pointer"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.5 15L12.4293 10.0707C12.4683 10.0317 12.4683 9.96834 12.4293 9.92929L7.5 5"
                                        stroke={`${currentPage >= setPagination().pageNumbers
                                            ? "#9FA2B4"
                                            : "#7C1B4C"
                                            }`}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </HStack>
                    </HStack>
                </div>
            </div>
        </>
    );
};

export default Pagination;
